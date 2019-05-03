import React from 'react';
import styled from 'styled-components';

import { below, elevation } from '../../utilities';

const Clock = ({ secondsElapsed }) => {
  const seconds = (secondsElapsed % 60).toString().padStart(2, 0);
  const minutes = (Math.floor(secondsElapsed / 60) % 60)
    .toString()
    .padStart(2, 0);
  const hours = Math.floor(secondsElapsed / 60 / 60).toString();

  return (
    <StyledTimer>
      <div className="hours">
        <div className="value">{hours}</div>
        <div className="label">hours</div>
      </div>
      {/* <div className="minutes-seconds-wrapper"> */}
      <div className="minutes">
        <div className="value">{minutes}</div>
        <div className="label">minutes</div>
      </div>
      <div className="seconds">
        <div className="value">{seconds}</div>
        <div className="label">seconds</div>
      </div>
      {/* </div> */}
    </StyledTimer>
  );
};

const StyledTimer = styled.div`
  display: flex;

  .hours,
  .minutes,
  .seconds {
    text-align: center;
    margin: 0 15px;

    .value {
      font-weight: 600;
      font-size: 3rem;
      line-height: 3.1rem;
    }

    .label {
      font-size: 1rem;
      font-style: italic;
    }
  }

  .minutes-seconds-wrapper {
    display: flex;
    margin: 1rem;
  }
`;

export default Clock;
