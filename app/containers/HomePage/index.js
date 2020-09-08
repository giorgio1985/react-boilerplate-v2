/*
 * HomePage
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
import ReposList from 'components/ReposList';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import messages from './messages';
// import CenteredSection from './CenteredSection';
import Section from './Section';
// import { loadRepos } from '../App/actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Cards from '../Cards/Loadable';

const key = 'home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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
  const classes = useStyles();
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js Boilerplate v2" />
      </Helmet>
      <div>
        <Section>
          <ReposList {...reposListProps} />
        </Section>
        <H1>
          <FormattedMessage {...messages.home} />
        </H1>
        <H3>Sotto titolo - Home page</H3>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.paper} />
              <Cards />
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} />
              <Cards />
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} />
              <Cards />
            </Grid>
          </Grid>
        </div>
      </div>
    </article>
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
    /*
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
      }, */
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
