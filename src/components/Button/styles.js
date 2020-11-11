import WhiteArrow from '../../assets/WhiteArrow.svg';
import styled from 'styled-components';
import { device } from '../../styles/device';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: 24px;
  margin-top: 48px;
  padding: 12px 24px;
  width: 100%;
  transition: all 0.25s ease;
  cursor: pointer;

  &::after {
    content: '';
    background: url(${WhiteArrow}) no-repeat;
    line-height: 24px;
    margin-left: 8px;
    position: relative;
    width: 10px;
    height: 10px;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.orangeDark};
  }

  @media ${device.tablet} {
    width: auto;
  }
`;
