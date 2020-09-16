/**
 *
 * FirstCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFirstCard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H1 from '../../components/H1';
import H3 from '../../components/H3';

export function FirstCard() {
  useInjectReducer({ key: 'firstCard', reducer });
  useInjectSaga({ key: 'firstCard', saga });

  return (
    <div>
      <div id="underTitle">
      <H1>
        <FormattedMessage {...messages.firstCard} />
      </H1>
      
        <H3>
          <FormattedMessage {...messages.underTitle} />
        </H3>
      </div>
 

    </div>
    
  );
}

FirstCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  firstCard: makeSelectFirstCard(),
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

export default compose(withConnect)(FirstCard);
