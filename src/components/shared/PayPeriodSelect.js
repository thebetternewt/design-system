import React from 'react';
import { Button as BpButton, MenuItem, Label } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

const payPeriods = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
  { id: 4, number: 4 },
  { id: 5, number: 5 },
  { id: 6, number: 6 },
  { id: 7, number: 7 },
  { id: 8, number: 8 },
  { id: 9, number: 9 },
  { id: 10, number: 10 },
  { id: 11, number: 11 },
  { id: 12, number: 12 },
];

const PayPeriodSelect = ({ handlePayPeriodSelect, selectedPayPeriod }) => {
  console.log('pp:', selectedPayPeriod);
  return (
    <Label>
      Pay Period
      <Select
        items={payPeriods}
        itemRenderer={(pp, { modifiers, handleClick }) => (
          <MenuItem
            active={modifiers.active}
            label={pp.number}
            key={pp.id}
            onClick={handleClick}
          />
        )}
        onItemSelect={handlePayPeriodSelect}
        noResults={<MenuItem disabled={true} text="No results." />}
        filterable={false}
      >
        <BpButton
          text={selectedPayPeriod ? selectedPayPeriod.id : 'Select PayPeriod'}
          rightIcon="double-caret-vertical"
          // large
          style={{ display: 'flex', justifyContent: 'space-between' }}
          fill
        />
      </Select>
    </Label>
  );
};

export default PayPeriodSelect;
