import styled from 'styled-components';
import { device } from '../../styles/device';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100vw' : 'auto')};

  @media ${device.tablet} {
    height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
    flex-direction: row;
  }
`;

export default FlexWrapper;
