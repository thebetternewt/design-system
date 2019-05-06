import React from 'react';
import { Router } from '@reach/router';

import EmployeeDashboard from './components/employee/Dashboard';
import SupervisorDashboard from './components/supervisor/Dashboard';
import Employee from './components/users/Employee';

const Routes = () => {
  return (
    <Router>
      <EmployeeDashboard path="/" default />
      <SupervisorDashboard path="/supervisor" />
      <Employee path="/employees/:empId" />
    </Router>
  );
};

export default Routes;
