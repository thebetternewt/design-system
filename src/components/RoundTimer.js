import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as BpButton, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import { below, elevation } from '../utilities';

const departments = [{ id: 1, name: 'DIWS' }, { id: 2, name: 'Systems' }];

const RoundTimer = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [selectedDept, setSelectedDept] = useState(departments[0]);

  const timer =
    isClockedIn &&
    setTimeout(() => {
      setTimeElapsed(timeElapsed + 1);
    }, 1000);

  const toggleClockedIn = () => {
    clearTimeout(timer);

    if (isClockedIn) {
      setClockedIn(false);
    } else {
      setClockedIn(true);
      setTimeElapsed(0);
    }
  };

  console.log('selectedDept:', selectedDept);

  const seconds = (timeElapsed % 60).toString().padStart(2, 0);
  const minutes = (Math.floor(timeElapsed / 60) % 60).toString().padStart(2, 0);
  const hours = Math.floor(timeElapsed / 60 / 60).toString();

  const handleSelect = dept => {
    console.log('selecting...');
    console.log(dept);
    setSelectedDept(dept);
  };

  return (
    <>
      <div
        style={{
          height: 30,
          margin: '2rem auto 0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isClockedIn ? (
          <h3 style={{ margin: 0 }}>Clocked into {selectedDept.name}</h3>
        ) : (
          <Select
            // activeItem={selectedDept}
            items={departments}
            itemRenderer={(dept, { modifiers, handleClick }) => (
              <MenuItem
                active={modifiers.active}
                label={dept.name}
                key={dept.id}
                onClick={handleClick}
              />
            )}
            onItemSelect={handleSelect}
            noResults={<MenuItem disabled={true} text="No results." />}
            filterable={false}
          >
            {/* children become the popover target; render value here */}
            <BpButton
              text={selectedDept ? selectedDept.name : 'Select Department'}
              rightIcon="double-caret-vertical"
              large
              fill
            />
          </Select>
        )}
      </div>
      <TimerWrapper>
        {isClockedIn ? (
          <>
            <StyledTimer>
              <div className="hours">
                <div className="value">{hours}</div>
                <div className="label">hours</div>
              </div>
              <div className="minutes-seconds-wrapper">
                <div className="minutes">
                  <div className="value">{minutes}</div>
                  <div className="label">minutes</div>
                </div>
                <div className="seconds">
                  <div className="value">{seconds}</div>
                  <div className="label">seconds</div>
                </div>
              </div>
            </StyledTimer>
            <ClockOutButton onClick={toggleClockedIn}>Clock Out</ClockOutButton>
          </>
        ) : (
          <div>
            <ClockInButton onClick={toggleClockedIn}>Clock In</ClockInButton>
          </div>
        )}
      </TimerWrapper>
    </>
  );
};

const StyledTimer = styled.div`
  .hours,
  .minutes,
  .seconds {
    text-align: center;

    .value {
      font-weight: 600;
    }

    .label {
      font-size: 1.4rem;
      font-style: italic;
    }
  }

  .hours {
    .value {
      font-size: 6rem;
    }
  }

  .minutes,
  .seconds {
    margin: 1.3em;

    .value {
      font-size: 4rem;
    }
  }

  .minutes-seconds-wrapper {
    display: flex;
  }

  ${below.sm`
    .hours,
    .minutes,
    .seconds {
      .label {
        font-size: 1rem;
      }
    }

    .hours {
      .value {
        font-size: 4rem;
      }
    }

    .minutes,
    .seconds {

      .value {
        font-size: 2rem;
      }
    }
  `}
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3rem auto;
  width: 400px;
  height: 400px;
  border-radius: 500px;
  ${elevation[2]};

  background-color: #3e5b70;
  color: #fff;

  ${below.sm`
    width: 280px;
    height: 280px;
  `}
`;

const ClockOutButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

  ${below.sm`
    width: 60px;
    height: 60px;
  `}
`;

const ClockInButton = styled.button`
  width: 200px;
  height: 200px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  border-radius: 100px;
  border: none;
  color: #000;
  cursor: pointer;
  ${elevation[2]};
  transition: all 100ms ease;

  &:active {
    ${elevation[1]};
    transform: translate3d(0, 1px, 0);
  }
`;

export default RoundTimer;
