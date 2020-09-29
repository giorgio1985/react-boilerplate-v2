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

import Menu from '@material-ui/icons/Menu';
import '../Header/header.css';


const Header = () => {
  
  //const [isMenuOpen, setIsMenuOpen] = useState(true);   ---> superfluo !
  //const active = isMenuOpen ? 'active' : 'noActive';  

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const drop = isDropDownOpen ? 'dropDown' : 'dropDownClose'; 

  const menuStatus = () => {
    //console.log('isMenuOpen: ', isMenuOpen);
   // console.log('active: ', active); 

    console.log('isDropDownOpen: ', isDropDownOpen);
    console.log('drop: ', drop); 

    //setIsMenuOpen(!isMenuOpen);
    setIsDropDownOpen(!isDropDownOpen);

  }

  return (
<div>
   <AppBar
   position="sticky"
   style={{ background: 'white', color: 'black' }}
   >
   {/**/}
   <div className="flex-container">
      
      <Toolbar>
         <div className="myLogo">
            <img
               src={moustache}
               crossOrigin="anonymous"
               height="50px"
               alt="Main logo"
               />{/*``*/}
         </div>
         <HeaderLinkStyle id='initialMenuStyle' className = {drop} >
            <div className=''>
               <div className="dropList">
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
               </div>
            </div>
         </HeaderLinkStyle>
         <Typography className="titleFlag"> </Typography>
         {/*da gestire tramite flex box */}
         <Hidden smUp>
            <IconButton aria-label="app" className="iconButton" onClick={menuStatus}>
               <Menu/>
            </IconButton>
         </Hidden>
      </Toolbar>
      {/* */}
   </div>
   
   </AppBar>     
</div>

    
  );
}

export default Header;