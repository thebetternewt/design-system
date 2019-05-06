import React from 'react';
import { Button as BpButton, MenuItem, Label } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

const DepartmentSelect = ({
  departments,
  handleDeptSelect,
  selectedDept,
  style,
}) => {
  return (
    <Label style={style}>
      Department
      <Select
        items={departments}
        itemRenderer={(dept, { modifiers, handleClick }) => (
          <MenuItem
            active={modifiers.active}
            label={dept.name}
            key={dept.id}
            onClick={handleClick}
          />
        )}
        onItemSelect={handleDeptSelect}
        noResults={<MenuItem disabled={true} text="No results." />}
        filterable={false}
      >
        <BpButton
          text={selectedDept ? selectedDept.name : 'Select Department'}
          rightIcon="double-caret-vertical"
          // large
          style={{ display: 'flex', justifyContent: 'space-between' }}
          fill
        />
      </Select>
    </Label>
  );
};

export default DepartmentSelect;
