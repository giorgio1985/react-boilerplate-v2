/**
 *
 * About
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
import makeSelectAbout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H1 from '../../components/H1';
import H3 from '../../components/H3';

export function About() {
  useInjectReducer({ key: 'about', reducer });
  useInjectSaga({ key: 'about', saga });

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.about} />
      </H1>
      <div id="underTitle">
        <H3>
          <FormattedMessage {...messages.underTitle} />
        </H3>
      </div>
    </div>
  );
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
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

export default compose(withConnect)(About);
