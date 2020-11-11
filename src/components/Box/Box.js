import styled from 'styled-components';
import { device } from '../../styles/device';

const Box = styled.div`
  width: 100%;

  @media ${device.tablet} {
    height: 100%;
    max-width: ${({ maxWidth }) => maxWidth}px;
  }
`;

export default Box;
