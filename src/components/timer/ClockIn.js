import React from 'react';
import styled from 'styled-components';

import { elevation } from '../../utilities';
import DepartmentSelect from '../shared/DepartmentSelect';

const ClockIn = ({ departments, selectedDept, handleDeptSelect, clockIn }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <DepartmentSelect
        departments={departments}
        selectedDept={selectedDept}
        handleDeptSelect={handleDeptSelect}
      />
      <ClockInButton onClick={clockIn}>Clock In</ClockInButton>
    </div>
  );
};

const ClockInButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  border-radius: 100px;
  border: none;
  margin: 1rem 0;
  color: #000;
  cursor: pointer;
  ${elevation[2]};
  transition: all 100ms ease;

  &:active {
    ${elevation[1]};
    transform: translate3d(0, 1px, 0);
  }
`;

export default ClockIn;
