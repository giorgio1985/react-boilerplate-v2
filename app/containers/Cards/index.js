/**
 *
 * Cards
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import messages from './messages';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moon from '../../images/moon.jpg';
import saga from './saga';
import reducer from './reducer';
import makeSelectCards from './selectors';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 100,
  },
});

export function Cards() {
  const classes = useStyles();

  useInjectReducer({ key: 'cards', reducer });
  useInjectSaga({ key: 'cards', saga });

  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <div className="mdc-card">
        <Card className={classes.root} variant="outlined">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={moon}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

/* Cards.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
*/
const mapStateToProps = createStructuredSelector({
  cards: makeSelectCards(),
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

export default compose(withConnect)(Cards);
