import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: black;
  padding: 0.8em;
  margin: 0.2em;
  float: left;
  padding-top: 0em;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  &:focus {
    background: black;
    color: white;
  }
  &:hover {
    background: grey;
    color: white;
  }
  @media screen and (max-width: 959) {
  z-index: 2;
  }
`;

