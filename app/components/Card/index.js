/**
 *
 * Card
 *
 */

import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import mockCards from './mock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';



function Cards() {
  console.log('lunghezza array:', mockCards.length);
    const renderCard = (item, index) => {
    console.log('image:', item.image);
    console.log('card id:', item.id);
 
return( 
<div  key={index}>

<Card style={{ width: '18rem' }} className="box">
  <Card.Img variant="top" src= { require(`../../images/${item.image}`) } height="200px"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <hr></hr>
    <Card.Text>
    Card: {item.id} 
    </Card.Text>
    <Card.Text>
    commento: {item.commento} 
    </Card.Text>
   <Button >  Links: {item.link} </Button>
  </Card.Body>
</Card>
</div>
    )
 }
 
return (
<div className="grid">{mockCards.map((renderCard))}
</div>
) 

};

Cards.propTypes = {};

export default Cards;  
