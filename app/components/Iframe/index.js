/**
 *
 * Iframe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
function Iframe() {
  return (
  <div className="google-map-code">

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.678528502872!2d9.204378515430573!3d45.476279379101044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6c097e88a09%3A0x66f113e6a98cc76b!2sSensei%20SRL!5e0!3m2!1sit!2sit!4v1602074864699!5m2!1sit!2sit"
     width= "100%"
     height="600" 
     style={{border: 0, ariaHidden: true}}
  />

 
  </div>
  );
}

Iframe.propTypes = {};

export default Iframe;
