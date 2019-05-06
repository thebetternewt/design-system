import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Icon, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { fixed } from '../utilities';
import NavLinks from './NavLinks';

const Container = styled(animated.div)`
  height: calc(100vh - 20px);
  width: 250px;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  box-shadow: 3px 7px 12px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;

  nav {
    margin-top: 40px;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    position: absolute;
    top: 15px;
    left: 12px;
  }
`;

const Sidebar = ({ children, close, style }) => (
  <Container style={style}>
    <button onClick={close}>Close</button>
    {children}
  </Container>
);

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  ${fixed}
  background-color: rgba(0,0,0,0.5);
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
`;

const SidebarWrapper = () => {
  const [isOpen, setOpen] = useState(false);

  const sidebarAnimation = useSpring({
    transform: isOpen
      ? `translate3d(0,0,0) scale(1) rotate(0deg)`
      : `translate3d(400px,0,0) scale(0.5) rotate(20deg)`,
  });

  const toggleSidebar = () => setOpen(!isOpen);

  return (
    <>
      {isOpen && <Overlay onClick={toggleSidebar} />}
      <MenuButton onClick={toggleSidebar}>
        <Icon icon={IconNames.MENU} iconSize={30} />
      </MenuButton>
      <Sidebar style={sidebarAnimation} close={toggleSidebar}>
        <NavLinks closeSidebar={toggleSidebar} />
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;
