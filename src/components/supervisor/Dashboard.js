import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import {
  Button as BpButton,
  Intent,
  Colors,
  Icon,
  Divider,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import DepartmentSelect from '../shared/DepartmentSelect';
import PayPeriodSelect from '../shared/PayPeriodSelect';
import FiscalYearSelect from '../shared/FiscalYearSelect';
import Indicator from '../shared/Indicator';
import { Card } from '../../elements/Cards';
import { BLUEGRAY } from '../../utilities';
import Grid, { GridButton } from '../../layouts/DashboardGrid';
import { lighten } from 'polished';

const departments = [{ id: 1, name: 'DIWS' }, { id: 2, name: 'Systems' }];
const initEmployees = [
  {
    id: 1,
    netId: 'cre48',
    fullName: 'Chris Eady',
    clockedIn: true,
    hours: 1.5,
  },
  {
    id: 2,
    netId: 'test123',
    fullName: 'Test User',
    clockedIn: false,
    hours: 1.5,
  },
  {
    id: 3,
    netId: 'fb22',
    fullName: 'Frodo Baggins',
    clockedIn: true,
    hours: 11.3,
  },
];

const SupervisorDashboard = () => {
  const [employees, setEmployees] = useState(initEmployees);
  const [dept, setDept] = useState(departments[0]);
  const [payPeriod, setPayPeriod] = useState();
  const [fiscalYear, setFiscalYear] = useState();

  const clockOut = empId => {
    console.log(empId);

    const emp = employees.find(emp => emp.id === empId);
    emp.clockedIn = false;

    const updatedEmployees = [
      ...employees.filter(emp => emp.id !== empId),
      emp,
    ];

    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h1>
        Supervisor{' '}
        <span
          style={{ fontSize: '0.7em', fontWeight: 400, fontStyle: 'italic' }}
        >
          (Pay Period: Current)
        </span>
      </h1>
      <div
        css={css`
          display: flex;
          width: 100%;

          & > div {
            /* flex-grow: 1; */
            flex-basis: 33%;
            padding: 0 5px;
          }
        `}
      >
        <div>
          <DepartmentSelect
            departments={departments}
            selectedDept={dept}
            handleDeptSelect={dept => setDept(dept)}
          />
        </div>
        <div>
          <PayPeriodSelect
            selectedPayPeriod={payPeriod}
            handlePayPeriodSelect={pp => setPayPeriod(pp)}
          />
        </div>
        <div>
          <FiscalYearSelect
            selectedFiscalYear={fiscalYear}
            handleFiscalYearSelect={fy => setFiscalYear(fy)}
          />
        </div>
      </div>
      <div>
        <h2>Employees</h2>
        <div
          style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}
        >
          <Indicator intent="success" style={{ marginRight: '10px' }} /> =
          currently clocked in
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}
        >
          <Indicator intent="danger" style={{ marginRight: '10px' }} /> = over 8
          hours
        </div>
        <EmployeeList>
          {employees.map(emp => {
            let intent;

            if (emp.clockedIn && emp.hours > 8) {
              intent = 'danger';
            } else if (emp.clockedIn) {
              intent = 'success';
            }

            return (
              <li key={emp.id}>
                <EmployeeCard intent={intent}>
                  <div className="user">
                    <Indicator intent={intent} />
                    <span>
                      {emp.fullName} ({emp.netId})
                    </span>
                  </div>
                  <div className="hours">
                    {emp.clockedIn ? `${emp.hours} hr` : '--'}
                  </div>
                  <div className="actions">
                    {emp.clockedIn && (
                      <BpButton
                        intent={Intent.DANGER}
                        onClick={() => clockOut(emp.id)}
                      >
                        Clock Out
                      </BpButton>
                    )}
                    <BpButton intent={Intent.PRIMARY}>Details</BpButton>
                  </div>
                </EmployeeCard>
              </li>
            );
          })}
        </EmployeeList>
        {/* <BpButton large intent="primary" icon="add" text="Add Employee" /> */}
      </div>
      <Divider style={{ margin: '2rem 0' }} />
      <h2>Actions</h2>
      <Grid>
        <GridButton>
          <Icon icon={IconNames.NEW_PERSON} iconSize={55} />
          <span>Add Employee</span>
        </GridButton>
        <GridButton>
          <Icon icon={IconNames.PRINT} iconSize={55} />
          <span>Timesheets</span>
        </GridButton>
        <GridButton>
          <Icon icon={IconNames.HISTORY} iconSize={55} />
          <span>History</span>
        </GridButton>
      </Grid>
    </div>
  );
};

const EmployeeList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 7px;
  }
`;

const EmployeeCard = styled(Card)`
  /* background-color: ${({ intent }) =>
    intent === 'danger' ? lighten(0.2, Colors.RED5) : BLUEGRAY}; */
  background-color: BLUEGRAY;
  /* color: ${({ intent }) => (intent === 'danger' ? '#000' : '#fff')}; */
  color: #fff;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;

  .user,
  .hours,
  .actions {
    display: flex;
    align-items: center;
  }

  .user {
    flex-basis: 400px;

    span {
      margin-left: 10px;
    }
  }

  .hours {
    flex-basis: 20%;
    justify-content: flex-start;
  }

  .actions {
    flex-basis: 20%;
    flex-grow: 1;
    justify-content: flex-end;

    & > button {
      margin-left: 5px;
    }
  }
`;

export default SupervisorDashboard;
