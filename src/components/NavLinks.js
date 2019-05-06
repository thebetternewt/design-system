import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }
`;

const NavLinks = ({ closeSidebar }) => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/supervisor" onClick={closeSidebar}>
            Supervisor
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavLinks;
