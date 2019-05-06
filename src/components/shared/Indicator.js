import React from 'react';
import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

const Indicator = ({ className, style }) => {
  return <div className={className} style={style} />;
};

export default styled(Indicator)`
  height: 12px;
  width: 12px;
  border-radius: 5px;
  background-color: ${({ intent }) => {
    switch (intent) {
      case 'success':
        return Colors.GREEN4;
      case 'danger':
        return Colors.RED3;
      default:
        return `transparent`;
    }
  }};
`;
