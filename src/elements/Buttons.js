import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { elevation, TEAL } from '../utilities';

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: 1rem;
  padding: 3px 10px;
  border: 2px solid #fff;
  `,

  cancel: () => `
    background: tomato
  `,

  raised: () => `
    ${elevation[2]};
    transition: all 100ms ease;

    &:active {
      ${elevation[1]};
      transform: translate3d(0, 1px, 0);
    }
  `,
};

export const Button = styled.button`
  background: ${TEAL};
  color: #fff;
  padding: 5px 20px;
  border: 3px solid #fff;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: 150ms all linear;
  ${elevation[2]};
  outline: none;

  &:active {
    ${elevation[1]};
    transform: translate3d(0, 1px, 0);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;
