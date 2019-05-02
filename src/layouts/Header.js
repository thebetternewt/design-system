import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { DARK_BLUEGRAY, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
    Styled Systems
  </header>
);

export default styled(Header)`
  background-color: ${DARK_BLUEGRAY};
  color: #fff;
  padding: 10px 5%;
  width: 100%;
  /* ${serif} */

  ${fixed()}
  ${elevation[1]};

  display: flex;
  align-items: center;
  font-size: 1.5rem;

  .logo {
    width: 60px;
  }
`;
