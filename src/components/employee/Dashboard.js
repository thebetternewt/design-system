import React from 'react';
import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import Timer from '../Timer';
import { elevation } from '../../utilities';
import Grid, { GridButton } from '../../layouts/DashboardGrid';

const Dashboard = () => {
  return (
    <Grid>
      <GridTimer>
        <Timer />
      </GridTimer>
      <GridButton>
        <Icon icon={IconNames.HISTORY} iconSize={55} />
        <span>History</span>
      </GridButton>
      <GridButton>
        <Icon icon={IconNames.PRINT} iconSize={55} />
        <span>Timesheets</span>
      </GridButton>
      {/* <GridButton /> */}
    </Grid>
  );
};

const GridTimer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 100%;
`;

export default Dashboard;
