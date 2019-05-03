import React from 'react';
import styled from 'styled-components';
import { Button as BpButton, MenuItem, Label } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import { elevation } from '../../utilities';

const ClockIn = ({ departments, selectedDept, handleSelectDept, clockIn }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Label>
        Select Department
        <Select
          // activeItem={selectedDept}
          items={departments}
          itemRenderer={(dept, { modifiers, handleClick }) => (
            <MenuItem
              active={modifiers.active}
              label={dept.name}
              key={dept.id}
              onClick={handleClick}
            />
          )}
          onItemSelect={handleSelectDept}
          noResults={<MenuItem disabled={true} text="No results." />}
          filterable={false}
        >
          <BpButton
            text={selectedDept ? selectedDept.name : 'Select Department'}
            rightIcon="double-caret-vertical"
            large
            style={{ display: 'flex', justifyContent: 'space-between' }}
            fill
          />
        </Select>
      </Label>
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
