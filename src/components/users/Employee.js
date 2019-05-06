import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import moment from 'moment';
import {
  Button as BpButton,
  Intent,
  Icon,
  Divider,
  Breadcrumbs,
  Breadcrumb,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { Card } from '../../elements/Cards';
import Grid, { GridButton } from '../../layouts/DashboardGrid';
import { DARK_BLUEGRAY } from '../../utilities';
import DepartmentSelect from '../shared/DepartmentSelect';
import PayPeriodSelect from '../shared/PayPeriodSelect';
import FiscalYearSelect from '../shared/FiscalYearSelect';
import employees from '../../data/employees.json';
import departments from '../../data/departments.json';
import shifts from '../../data/shifts.json';

const initEmployee = empId =>
  employees.find(emp => emp.id.toString() === empId);

const initShifts = (empId, deptId) =>
  shifts.filter(
    shift => shift.userId.toString() === empId && shift.deptId === deptId
  );

const Employee = ({ empId }) => {
  const [dept, setDept] = useState(departments[0]);
  const [employee, setEmployee] = useState(initEmployee(empId));
  const [selectedShifts, setSelectedShifts] = useState(
    initShifts(empId, dept.id)
  );
  const [payPeriod, setPayPeriod] = useState();
  const [fiscalYear, setFiscalYear] = useState();

  const BREADCRUMBS = [
    { href: '/supervisor', icon: 'folder-close', text: 'Supervisor' },
    { href: '/supervisor', icon: 'folder-close', text: 'Employees' },
    { href: '/employees/2', icon: 'person', text: employee.fullName },
  ];

  const handleDeptSelect = (empId, deptId) => {
    console.log(empId, deptId);
    const updatedShifts = shifts.filter(
      shift => shift.userId.toString() === empId && shift.deptId === deptId
    );
    console.log(updatedShifts);
    setSelectedShifts(updatedShifts);
  };

  const renderCurrentBreadcrumb = ({ text, href, icon, ...restProps }) => {
    // customize rendering of last breadcrumb
    return (
      <Link to={href}>
        <Breadcrumb {...restProps}>
          {text} <Icon icon={icon} />
        </Breadcrumb>
      </Link>
    );
  };

  const renderBreadcrumb = ({ text, href, ...restProps }) => {
    // customize rendering of breadcrumbs
    return (
      <Link to={href}>
        <Breadcrumb {...restProps}>{text}</Breadcrumb>
      </Link>
    );
  };

  return (
    <div>
      <Breadcrumbs
        breadcrumbRenderer={renderBreadcrumb}
        currentBreadcrumbRenderer={renderCurrentBreadcrumb}
        items={BREADCRUMBS}
      />
      <h1>{employee.fullName}</h1>
      <DepartmentSelect
        departments={departments}
        selectedDept={dept}
        handleDeptSelect={dept => {
          setDept(dept);
          handleDeptSelect(empId, dept.id);
        }}
      />
      <PayPeriodSelect
        selectedPayPeriod={payPeriod}
        handlePayPeriodSelect={pp => setPayPeriod(pp)}
      />

      <FiscalYearSelect
        selectedFiscalYear={fiscalYear}
        handleFiscalYearSelect={fy => setFiscalYear(fy)}
      />
      <Divider style={{ margin: '2rem 0' }} />
      <h2>Shifts</h2>
      <ShiftCard style={{ backgroundColor: DARK_BLUEGRAY, marginBottom: 10 }}>
        <div className="timeIn">Time In</div>
        <div className="timeOut">Time Out</div>
        <div className="totalTime">Total Hours</div>
        <div className="actions">
          {/* <BpButton
            intent={Intent.DANGER}
            onClick={() => console.log('DELETE!')}
          >
            Delete
          </BpButton>

          <BpButton intent={Intent.PRIMARY} onClick={() => console.log('EDIT')}>
            Edit
          </BpButton> */}
        </div>
      </ShiftCard>
      <ShiftList>
        {selectedShifts.map(shift => {
          let intent;

          return (
            <li key={shift.id}>
              <ShiftCard intent={intent}>
                <div className="timeIn">
                  <span>{moment(shift.timeIn).format('LLL')}</span>
                </div>
                <div className="timeOut">
                  {moment(shift.timeOut).format('LLL')}
                </div>
                <div className="totalTime">
                  {moment(shift.timeOut)
                    .diff(moment(shift.timeIn), 'hours', true)
                    .toFixed(2)}{' '}
                  hours
                </div>
                <div className="actions">
                  <BpButton
                    intent={Intent.DANGER}
                    onClick={() => console.log('DELETE!')}
                  >
                    Delete
                  </BpButton>

                  <BpButton
                    intent={Intent.PRIMARY}
                    onClick={() => console.log('EDIT')}
                  >
                    Edit
                  </BpButton>
                </div>
              </ShiftCard>
            </li>
          );
        })}
      </ShiftList>

      <Divider style={{ margin: '2rem 0' }} />
      <h2>Actions</h2>
      <Grid>
        <GridButton>
          <Icon icon={IconNames.ADD} iconSize={55} />
          <span>Add Shift</span>
        </GridButton>
        <GridButton>
          <Icon icon={IconNames.CROSS} iconSize={55} />
          <span style={{ fontSize: '1.1rem' }}>Remove from Department</span>
        </GridButton>
        <GridButton>
          <Icon icon={IconNames.PRINT} iconSize={55} />
          <span>Timesheet</span>
        </GridButton>
      </Grid>
    </div>
  );
};

const ShiftList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 7px;
  }
`;

const ShiftCard = styled(Card)`
  background-color: BLUEGRAY;
  color: #fff;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;

  .timeIn,
  .timeOut,
  .totalTime,
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .timeIn,
  .timeOut,
  .totalTime {
    flex-basis: 300px;
  }

  /* .user {
    flex-basis: 400px;

    span {
      margin-left: 10px;
    }
  }

  .hours {
    flex-basis: 20%;
    justify-content: flex-start;
  } */

  .actions {
    flex-basis: 100px;
    flex-grow: 1;
    justify-content: flex-end;

    & > button {
      margin-left: 5px;
    }
  }
`;

export default Employee;
