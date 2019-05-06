import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
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
    <div className="links">
      <Link to="/">
        <Icon icon="user" iconSize={20} />
      </Link>
      <Sidebar />
    </div>
  </header>
);

export default styled(Header)`
  background-color: ${DARK_BLUEGRAY};
  color: #fff;
  padding: 10px 5%;
  width: 100%;

  ${fixed()}
  ${elevation[1]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;
  }

  .links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.3rem;

    a {
      display: flex;
      align-items: center;
      color: inherit;
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;
