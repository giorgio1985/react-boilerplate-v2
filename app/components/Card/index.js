/**
 *
 * Card
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render } from 'react-testing-library';
import moon from '../../images/moon.jpg';
import mock from './mock.json';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 100,
  },
});
function Cards() {
  const classes = useStyles();
  const mockData = mock.map((item, index) => {
    render(
      <div>
        <div className="mdc-card">
          <Card className={classes.root} variant="outlined" key={index.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={moon}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cards
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 {item.commento}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Links
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>,
    );
  });

  return <div>{mockData}</div>;
}

Cards.propTypes = {};

export default Cards;
