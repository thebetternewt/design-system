import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Dialog, Classes, Tooltip, Button, Intent } from '@blueprintjs/core';

const EmployeeDetailDialog = ({ close, employee = {}, isOpen }) => {
  return (
    <Dialog
      // className={this.props.data.themeName}
      icon="person"
      onClose={close}
      title="Employee Detail"
      isOpen={isOpen}
      style={{ margin: '0 10px' }}
    >
      <div className={Classes.DIALOG_BODY}>
        <h3>{employee.fullName}</h3>
        <p>
          <strong>NetID:</strong> {employee.netId}
        </p>
        <p>
          <strong>9-digit ID:</strong> {employee.idNumber}
        </p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Tooltip content="This button is hooked up to close the dialog.">
            <Button onClick={close}>Close</Button>
          </Tooltip>
          <Button intent={Intent.DANGER}>Remove from Department</Button>
          <Link to={`/employees/${employee.id}`}>
            <Button intent={Intent.PRIMARY}>Manage User</Button>
          </Link>
        </div>
      </div>
    </Dialog>
  );
};

export default EmployeeDetailDialog;
