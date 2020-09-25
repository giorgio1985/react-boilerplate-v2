import React,  
{ useState } 
from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLink from './HeaderLink';
import HeaderLinkStyle from '../../components/HeaderLinkStyle';
import moustache from '../../images/moustache.png';

import { 
  Hidden, 
  IconButton, 
  Typography 
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
import '../Header/header.css';


const Header = () => {
  
  const [isMenuOpen, setMenu] = useState(true);
  const active = isMenuOpen ? 'headerMenu' : 'headerWrapMenu';

  const menuStatus = () => {
    console.log('isMenuOpen: ', isMenuOpen);
    console.log('active: ', active);
    setMenu(!isMenuOpen)
  }

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
        <Hidden >
          <HeaderLinkStyle className={active}>

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
        </Hidden>
        <Hidden smUp>
          <IconButton aria-label="app" className="iconButton" onClick={menuStatus}>
            <Menu/>
          </IconButton> 
       </Hidden> 

        </Toolbar>

      </AppBar>     

    </div>

    
  );
}

export default Header;