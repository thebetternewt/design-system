import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Icon, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import logo from '../logo.svg';
import { DARK_BLUEGRAY, elevation, fixed, serif } from '../utilities';
import Sidebar from '../components/Sidebar';

const Header = ({ className }) => (
  <header className={className}>
    <div className="logo">
      {/* <img src={logo} alt="logo" className="logo" />
      
       */}
      <Icon
        icon={IconNames.TIME}
        iconSize={36}
        style={{ marginRight: '0.8rem' }}
      />
      Shift
    </div>
    {/* <Nav>
      <a href="#">Dashboard</a>
      <a href="#">Admin</a>
    </Nav> */}
    <Sidebar />
  </header>
);

const Nav = styled.nav`
  display: flex;

  a {
    color: inherit;
    display: block;
    padding: 0 1rem;
  }
`;

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
  justify-content: space-between;
  font-size: 1.3rem;
  
  .logo {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
