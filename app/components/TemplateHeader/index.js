/**
 *
 * TemplateHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../H1';
import H3 from '../H3';

function TemplateHeader() {
  const currentPath = window.location.pathname;
  console.log(currentPath);

  if (currentPath === '/product') {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <div id="underTitle">
          <H3>Sotto titolo - Prodotti</H3>
        </div>
      </div>
    );
  }
  if (currentPath === '/about') {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.about} />
        </H1>
        <div id="underTitle">
          <H3>Sotto titolo - About</H3>
        </div>
      </div>
    );
  }
  if (currentPath === '/portfolio') {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.portfolio} />
        </H1>
        <div id="underTitle">
          <H3>Sotto titolo - Portfolio</H3>
        </div>
      </div>
    );
  }
  if (currentPath === '/team') {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.team} />
        </H1>
        <div id="underTitle">
          <H3>Sotto titolo - Team</H3>
        </div>
      </div>
    );
  }
  if (currentPath === '/contact') {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.contact} />
        </H1>
        <div id="underTitle">
          <H3>Sotto titolo - Contatti</H3>
        </div>
      </div>
    );
  }
}

TemplateHeader.propTypes = {};

export default TemplateHeader;
