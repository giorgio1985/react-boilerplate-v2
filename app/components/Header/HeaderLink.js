import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: black;
  padding: 1.1em;
  margin: 0.2em;
  padding-top: 0em;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  &:focus {
    background: white;
  }
  &:hover {
    background: white;
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    border-right: none;
    display: flex-direction;
  }
`;
