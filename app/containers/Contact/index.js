/**
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import gmap from '../../images/gmap.jpg';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import './contact.css';
//import  ModalDialog  from '../../components/ModalDialog';


export function Contact() {
  useInjectReducer({ key: 'contact', reducer });
  useInjectSaga({ key: 'contact', saga });


  const zoomIcon = () => {

   return (
    alert('Coming soon!')
)

  }

  return (
<div>
   <div className="googleMap">
      <img src={gmap}  alt="google map"  style={{width: '100%'}}/>  
      <div className="zoomMapIcon" onClick={zoomIcon}>
      <ZoomOutMapIcon/>
   </div>
</div>
<div className="descriptionMap">
   <div id="itemMap">
      nome:
   </div>
   <div id="itemMap">
      luogo:
   </div>
   <div id="itemMap">
      cap:
   </div>
</div>
</div>

  );
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Contact);
