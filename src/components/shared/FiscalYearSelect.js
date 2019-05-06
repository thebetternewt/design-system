import React from 'react';
import { Button as BpButton, MenuItem, Label } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

const fiscalYears = [
  { id: 2017, year: 2017 },
  { id: 2018, year: 2018 },
  { id: 2019, year: 2019 },
  { id: 2020, year: 2020 },
];

const FiscalYearSelect = ({ handleFiscalYearSelect, selectedFiscalYear }) => {
  console.log(selectedFiscalYear);
  return (
    <Label>
      Fiscal Year
      <Select
        items={fiscalYears}
        itemRenderer={(fy, { modifiers, handleClick }) => (
          <MenuItem
            active={modifiers.active}
            label={fy.year}
            key={fy.id}
            onClick={handleClick}
          />
        )}
        onItemSelect={handleFiscalYearSelect}
        noResults={<MenuItem disabled={true} text="No results." />}
        filterable={false}
      >
        <BpButton
          text={
            selectedFiscalYear ? selectedFiscalYear.id : 'Select Fiscal Year'
          }
          rightIcon="double-caret-vertical"
          // large
          style={{ display: 'flex', justifyContent: 'space-between' }}
          fill
        />
      </Select>
    </Label>
  );
};

export default FiscalYearSelect;
