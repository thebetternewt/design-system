import React from 'react';
import { Router } from '@reach/router';

import EmployeeDashboard from './components/employee/Dashboard';
import SupervisorDashboard from './components/supervisor/Dashboard';

const Routes = () => {
  return (
    <Router>
      <EmployeeDashboard path="/" default />
      <SupervisorDashboard path="/supervisor" />
    </Router>
  );
};

export default Routes;
