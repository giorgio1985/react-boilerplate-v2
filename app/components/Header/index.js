import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <AppBar
        position="absolute"
        style={{ background: 'white', color: 'black' }}
      >
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
