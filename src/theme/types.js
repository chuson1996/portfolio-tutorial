import styled from 'styled-components';
import {blue, yellow} from 'theme/variables';

export const A = styled.a`
  color: ${blue};
  text-decoration: none;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${blue};
    z-index: -1;
    transition: height .1s, background-color .1s;
  }

  &:hover:after {
    height: 40%;
    background-color: ${yellow};
  }
`;
