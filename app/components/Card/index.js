/**
 * Components   index.js
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
//import Headerlink from '../Header/HeaderLink';
import  ModalDialog  from '../ModalDialog';

const useStyles = makeStyles({
  root: {
    minWidth: 186,
  }
});

function Article(props) {

  const classes = useStyles();
  console.log('lunghezza array:', mockCards.length);
  const [open, setOpen] = React.useState(false);

 const handleClickOpen = () => {
  setOpen(!open);  
     console.log('props:', props.id)
     console.log('open:', open)

  };

return(
 
<Card className="box" variant="outlined">
  <CardContent>
    <Typography className={classes.root} color="textSecondary" gutterBottom>
       { props.id } 
    </Typography>
    
    <CardMedia 
       component="img"
       height="200px" 
       image= { props.image }
       />
    <Typography variant="body2" component="p">
       { props.commento }
          <br />
    </Typography>
      </CardContent>
      <CardActions>
   
       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Leggi di più!
      </Button>
     
      </CardActions>
      <ModalDialog toogleDialog = {open}

      id = {props.id}
      commento = {props.commento}      
      />
    </Card>    
    )

};

Article.propTypes = {};

export default Article; 