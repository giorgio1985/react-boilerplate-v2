/**
 *
 * Card
 *
 */

import React from 'react';
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
 
   const renderCard = (item) => {
    console.log('image', item.image);
    console.log('card id', item.id);
    return( 
      <div>
       
          <Card className={classes.root} key={item.id}>
            <CardActionArea> 
              <CardMedia
                className={classes.media}
                image = { require(`../../images/${item.image}`) }
                title={item.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                Cards: {item.id}   
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               commento: {item.commento} 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Links: {item.link}
              </Button>
            </CardActions>
          </Card><hr/>
        
      </div>
    );
      
 }
return <div className="Cards">{mockCards.map(renderCard)}</div>

};

Cards.propTypes = {};

export default Cards; 
