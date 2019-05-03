import React from 'react';
import styled, { css } from 'styled-components';
import { Icon, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import Timer from './Timer2';
import { below, elevation } from '../utilities';

const Dashboard = () => {
  return (
    <StyledGrid>
      <GridTimer>
        <Timer />
      </GridTimer>
      <StyledButton>
        <Icon icon={IconNames.HISTORY} iconSize={60} />
        <span>History</span>
      </StyledButton>
      <StyledButton>
        <Icon icon={IconNames.PRINT} iconSize={60} />
        <span>Timesheets</span>
      </StyledButton>
      <StyledButton />
      <StyledButton />
      <StyledButton />
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 180px));
  grid-auto-rows: 150px;
  gap: 15px;

  max-width: 100%;

  justify-items: center;

  margin: 2rem auto;

  ${below.sm`
    grid-template-columns: 1fr 1fr;
  `}
`;

const GridTimer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #660000;
  color: #fff;
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 10px;
  ${elevation[1]};

  text-align: center;
  cursor: pointer;
  transition: all 150ms ease;

  span {
    font-size: 1.2rem;
    display: block;
    margin-top: 10px;
  }

  &:hover {
    background-color: white;
    color: #660000;
  }
`;

export default Dashboard;
