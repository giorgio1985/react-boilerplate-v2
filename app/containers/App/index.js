/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
//import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import About from 'containers/About/Loadable';
import Contact from 'containers/Contact/Loadable';
import Portfolio from 'containers/Portfolio/Loadable';
import Product from 'containers/Product/Loadable';
import Team from 'containers/Team/Loadable';
import FirstCard from 'containers/FirstCard/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';


export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/card/1" component={FirstCard} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}