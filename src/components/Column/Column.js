import styled from 'styled-components';
import { device } from '../../styles/device';

const Column = styled.div`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  padding: 32px 24px;
  width: 100%;

  &:first-child {
    & > div {
      margin-left: auto;
    }
  }

  &:last-child {
    & > div {
      margin-right: auto;
    }
  }

  @media ${device.tablet} {
    height: 100%;
    flex: auto;
    padding: 0 ${({ p }) => p}px;
  }
`;

export default Column;
