/**
 *
 * Card
 *
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mockCards from './mock';
import CardMedia from '@material-ui/core/CardMedia';
import './card.css';
import Headerlink from '../Header/HeaderLink';

const useStyles = makeStyles({
  root: {
    minWidth: 186,
  }
});

function Cards() {
  const classes = useStyles();
  console.log('lunghezza array:', mockCards.length);
  const renderCard = (item, index) => {
  console.log('image:', item.image);
  console.log('card id:', item.id);
  console.log('className', classes.root )
return(
 
<div  key={index}>
<Card className="box" variant="outlined">
  <CardContent>
    <Typography className={classes.root} color="textSecondary" gutterBottom>
        Card: {item.id} 
    </Typography>
    
    <CardMedia 
        component="img"
        image = { require(`../../images/${item.image}`) }
        height="200px"
       />
    <Typography variant="body2" component="p">
        commento: {item.commento}
          <br />
    </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Headerlink to={`/card/${item.id}`}><u>Leggi di più</u></Headerlink> </Button>
      </CardActions>
    </Card>    
</div>
    )
 }
 
return (
<div className="grid">{mockCards.map((renderCard))}</div>
) 

};

Cards.propTypes = {};

export default Cards; 
