/**
 * container index.js
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import gmap from '../../images/gmap.jpg';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import './contact.css';
import  ModalDialog  from '../../components/ModalDialog';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Iframe from '../../components/Iframe';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
   paper: { minWidth: "500px" },
   
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


 



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



export function Contact() {    {/* Nome del componente  */}
                            
  useInjectReducer({ key: 'contact', reducer });
  useInjectSaga({ key: 'contact', saga });
  
  const [open, setOpen] = React.useState(false);
  const Foo = () => { 
  console.log('open', open);
  return setOpen(!open);
   }

return (
<div className="googleMap" >
<img src={gmap}  alt="google map" style={{width: '100%'}}/>  
<div className="zoomMapIcon" >
   <ZoomOutMapIcon onClick={Foo}/>

   <ModalDialog toogleDialog = {open} setButton = {Foo}  id = 'Contatti' >   
      <Iframe />
   </ModalDialog>

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