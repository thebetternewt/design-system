import styled from 'styled-components';
import { below, elevation } from '../utilities';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 180px));
  grid-auto-rows: 150px;
  gap: 15px;

  max-width: 100%;

  justify-items: center;

  margin: 2rem auto;

  ${below.sm`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const GridButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #660000;
  color: #fff;
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 10px;
  ${elevation[1]};

  text-align: center;
  cursor: pointer;
  transition: all 150ms ease;

  span {
    font-size: 1.2rem;
    display: block;
    margin-top: 15px;
  }

  &:hover {
    background-color: white;
    color: #660000;
  }
`;

export default StyledGrid;
