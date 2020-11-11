import styled from 'styled-components';
import { device } from '../../styles/device';

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  margin: 32px 0 16px;

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
  }
`;

export default H1;
