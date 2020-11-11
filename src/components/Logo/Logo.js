import styled from 'styled-components';
import { device } from '../../styles/device';

const Logo = styled.span`
  background: url(${({ src }) => src}) no-repeat;
  display: block;
  width: 177px;
  height: 26px;

  @media ${device.tablet} {
    margin-top: 32px;
  }
`;

export default Logo;
