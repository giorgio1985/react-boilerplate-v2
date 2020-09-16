import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLink from './HeaderLink';
import HeaderLinkStyle from '../../components/HeaderLinkStyle';
import moustache from '../../images/moustache.png';

function Header() {
  return (
    <div>
      <AppBar
        position="fixed"
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
          <HeaderLinkStyle>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;