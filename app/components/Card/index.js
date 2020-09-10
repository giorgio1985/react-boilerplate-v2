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
import mockCards from './mock';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 200,
  },
});
function Cards() {
  const classes = useStyles();
  console.log('root', classes.root);
  console.log('lunghezza array', mockCards.length);
 
   const renderCard = (card, index) => {
    console.log('image', card.image);
    return( 
      <div>
        <div className="mdc-card" >
          <Card className={classes.root} variant="outlined" >
            <CardActionArea> 
              <CardMedia
                className={classes.media}
                image = { require(`../../images/${card.image}`) }
                title={card.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
               <li key={index}>Cards: {card.id}   </li>  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               <li key ={index}> comment: {card.commento}</li>  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
               <li key={index}> Links: {card.link}</li>
              </Button>
            </CardActions>
          </Card><hr/>
        </div>
      </div>
    );
      
 }
return <div className="Cards">{mockCards.map(renderCard)}</div>

};

Cards.propTypes = {};

export default Cards; 
