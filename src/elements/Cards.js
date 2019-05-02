import styled from 'styled-components';
import { lighten } from 'polished';
import { Button } from './Buttons';
import { elevation, DARK_BLUEGRAY } from '../utilities';

export const Card = styled.div`
  border-radius: 10px;
  padding: 15px;
  background-color: ${lighten(0.15, DARK_BLUEGRAY)};
  color: #fff;
  ${elevation[1]};
`;

const CardButton = styled(Button)`
  /* width: 100%; */
  margin-right: 10px;
`;

Card.Button = CardButton;
