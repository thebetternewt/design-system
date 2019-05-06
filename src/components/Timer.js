import React, { useState } from 'react';
import styled from 'styled-components';

import { below, elevation } from '../utilities';
import Clock from './timer/Clock';
import ClockIn from './timer/ClockIn';

const departments = [{ id: 1, name: 'DIWS' }, { id: 2, name: 'Systems' }];

const Timer = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [selectedDept, setSelectedDept] = useState(departments[0]);

  const timer =
    isClockedIn &&
    setTimeout(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);

  const toggleClockedIn = () => {
    clearTimeout(timer);

    if (isClockedIn) {
      setClockedIn(false);
    } else {
      setClockedIn(true);
      setSecondsElapsed(0);
    }
  };

  const handleDeptSelect = dept => {
    setSelectedDept(dept);
  };

  return (
    <TimerWrapper>
      {isClockedIn ? (
        <>
          {' '}
          <h3>
            <span style={{ display: 'block' }}>Currently clocked in to</span>{' '}
            {selectedDept.name}
          </h3>
          <Clock secondsElapsed={secondsElapsed} />
          <ClockOutButton onClick={toggleClockedIn}>Clock Out</ClockOutButton>
        </>
      ) : (
        <ClockIn
          departments={departments}
          selectedDept={selectedDept}
          handleDeptSelect={handleDeptSelect}
          clockIn={toggleClockedIn}
        />
      )}
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin: 3rem auto; */
  padding: 1.5rem 10px;
  width: 100%;
  height: 100%;

  ${elevation[2]};
  border-radius: 10px;

  background-color: #3e5b70;
  color: #fff;

  h3 {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1rem;

    span {
      font-weight: 400;
      font-size: 1.1rem;
      font-style: italic;
    }
  }
`;

const ClockOutButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 100px;
  border: none;
  color: white;
  cursor: pointer;
  ${elevation[2]};
  transition: all 100ms ease;

  &:active {
    ${elevation[1]};
    transform: translate3d(0, 1px, 0);
  }

  /* ${below.sm`
    width: 60px;
    height: 60px;
  `} */
`;

export default Timer;
