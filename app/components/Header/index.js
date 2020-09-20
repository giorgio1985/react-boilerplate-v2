import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLink from './HeaderLink';
import HeaderLinkStyle from '../../components/HeaderLinkStyle';
import moustache from '../../images/moustache.png';
/*
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'*/
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'; 
import Menu from '@material-ui/icons/Menu';
import '../Header/header.css';
import { render } from 'react-dom';




class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    width: 0,
    height: 0
    };
  }
  
   newWidth;
   newHeight;

  componentDidMount() {
    this.resizeListener();
    this.getScreen();
  }

  resizeListener = () => {
    window.addEventListener('resize', this.theScreenListener);
    window.addEventListener('click', this.theListener);
    window.addEventListener('load', this.loadListener);
  }

  theScreenListener = () => {
  
    this.newWidth = innerWidth;
    this.newHeight =innerHeight;

    this.setState({ width: this.newWidth, height: this.newHeight });

    this.getScreen();

    console.log('new width state:', this.state.width);
    console.log('new height state:', this.state.height);
  }
  
  theListener = () => {
    //alert('Ampiezza schermo: ' + innerWidth +' X ' + innerHeight);
    
    this.newWidth = innerWidth;
    this.newHeight =innerHeight;

    this.setState({ width: this.newWidth, height: this.newHeight });
 
    this.getScreen();
     document.getElementById('titleFlag').innerHTML = '';
    document.getElementById('flag').style.display = 'block';
    document.getElementById('iconButton').style.display = 'none';

    console.log('new width state:', this.state.width);
    console.log('new height state:', this.state.height);

  }

  loadListener = () => {
    
    this.newWidth = innerWidth;
    this.newHeight =innerHeight;

    this.setState({ width: this.newWidth, height: this.newHeight });

    this.getScreen();

    console.log('new width state:', this.state.width);
    console.log('new height state:', this.state.height);
  }

  getScreen = () => {
    if(this.newWidth < 968 || this.newHeight < 700) {
      console.log('schermo modalita mobile!');
      document.getElementById('flag').style.display = 'none';
      document.getElementById('iconButton').style.display = 'block';
      document.getElementById('titleFlag').innerHTML = 'Titolo';
  } else if(this.newWidth >= 968 || this.newHeight >= 700) {
    console.log('schermo modalita desktop!');
    document.getElementById('flag').style.display = 'block';
    document.getElementById('iconButton').style.display = 'none';
    document.getElementById('titleFlag').innerHTML = '';
  }
}

render() {
  return (
    <div>
      <AppBar
        position="sticky"
        style={{ background: 'white', color: 'black' }}
      >
        <Toolbar>
          <div className="myLogo">
            <img
              src={moustache}
              crossOrigin="anonymous"
              height="50px"
              alt="Main logo"
            />
          </div>
          <HeaderLinkStyle id="flag">

          <HeaderLink to="/">
            <p>Home</p>
          </HeaderLink>
          
        
          <HeaderLink to="/product">
            <p>Product</p>
          </HeaderLink>

        
          <HeaderLink to="/about">
            <p>About</p>
          </HeaderLink>

      
          <HeaderLink to="/portfolio">
            <p>Portfolio</p>
          </HeaderLink>

      
          <HeaderLink to="/team">
            <p>Team</p>
          </HeaderLink>
         
        
          <HeaderLink to="/contact">
            <p>Contact</p>
          </HeaderLink>
          
          </HeaderLinkStyle>
          <Typography id="titleFlag" style={{ marginLeft: '45%'}}> </Typography>
           
          
          <IconButton aria-label="app" onClick={this.theListener} style={{ marginLeft: '35%' }} id="iconButton">
          <Menu/>
        </IconButton> 

        </Toolbar>

      </AppBar>     

    </div>

    
  );
}


}

export default Header;