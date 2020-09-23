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
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
import '../Header/header.css';
import { render } from 'react-dom';


class Header extends React.Component {

  constructor(props) {
   super(props);
    this.state = {
    isMenuOpen: true,
    iconButton: 'iconButton',
    closeIcon: 'closeIcon',
    flag: '',
    width: 0,
    height: 0
    
    };
  }
  
  componentDidMount() {
  this.getInitialMenu();
  }

  getInitialMenu = () => {
   console.log('initial width: ', window.screen.width);
   console.log('inital height: ', window.screen.height);
    if(window.screen.width > 750 && this.state.iconButton === 'iconButton') {
   this.setState({ iconButton: 'removeIcon', closeIcon: 'closeIcon'});
    console.log('iconButton:', this.state.iconButton);
    console.log('closeIcon:', this.state.closeIcon);
  }  
 else {
    console.log('errore stato');
      }
  }

  hideMenu = () =>{
   console.log('hideMenu function');
   if(this.state.isMenuOpen === true) {
     console.log('is menu open?: ', this.state.isMenuOpen);
     this.setState({isMenuOpen: false, flag: 'removeMenu', iconButton: 'addButton', closeIcon: 'removeIcon'});
   } else if(this.state.isMenuOpen === false) {
     console.log('is menu open? :', this.state.isMenuOpen);
     console.log('iconButton? :', this.state.iconButton);
     this.setState({isMenuOpen: true, flag: 'addMenu', iconButton: 'removeButton'})
     
   }
  }

  showMenu = () => {
    console.log('show function', this.state.flag);
    if(this.state.flag === 'removeMenu') {
      this.setState({flag: 'addMenu', closeIcon: 'addIcon', iconButton: 'removeButton' });
    }

  }

render() {
  return (
    <div>
      <AppBar
        position="sticky"
        style={{ background: 'white', color: 'black' }}
      >
        <Toolbar>  {/* da gestire tramite css */}
          <div className="myLogo">
            <img
              src={moustache}
              crossOrigin="anonymous"
              height="50px"
              alt="Main logo"
            />
          </div>
          <HeaderLinkStyle id={this.state.flag}>

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
          <Typography id="titleFlag"> </Typography> {/* da gestire tramite flex box */}
           
          
        <IconButton aria-label="app" onClick={this.showMenu} id={this.state.iconButton}>
          <Menu/>
        </IconButton> 

        <IconButton aria-label="app" onClick={this.hideMenu} id={this.state.closeIcon}>
         <CloseIcon/>
        </IconButton> 

        </Toolbar>

      </AppBar>     

    </div>

    
  );
}


}

export default Header;