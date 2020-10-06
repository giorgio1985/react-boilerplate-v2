/*
 * HomePage index.js
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import H3 from 'components/H3';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Article from '../../components/Card';
import '../HomePage/home.css';
import Container from '@material-ui/core/Container';
import  Grid  from '@material-ui/core/Grid';
import '../../components/Card/card.css';
import mockCards from '../../components/Card/mock';
//import  ModalDialog  from '../../components/ModalDialog';


const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  /* onChangeUsername,
  changeUsername, */
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <Container>
      <div className="container">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js Boilerplate v2" />
      </Helmet>
        <H1>
          <FormattedMessage {...messages.home} />
        </H1>
        <div>
          <H3>
             <FormattedMessage {...messages.underTitle} />
          </H3>
        </div> 
        <Grid container >
       
          {mockCards.map(renderCard=>{ 
          console.log('renderCard', renderCard);
          return( 
            
            <Grid item xs={12} sm={4} key={renderCard.id}>
              <Article 
                id={renderCard.id} 
                commento={renderCard.commento }
                link={renderCard.link}   
                image = { require(`../../images/${renderCard.image}`) } 
              />

            </Grid>   
      )    })}
        </Grid>
          </div>
      </Container>
    
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps() {
  return {
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);