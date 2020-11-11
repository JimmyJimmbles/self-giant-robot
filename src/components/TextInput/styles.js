import styled from 'styled-components';

export const FormField = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray};
  display: block;
  font-family: 'Merriweather', serif;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  margin-bottom: 8px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: ${({ value, error, theme }) =>
    !value && !error ? theme.colors.offWhite : theme.colors.white};
  border: 1px solid
    ${({ value, theme }) =>
      !value ? theme.colors.grayLight : theme.colors.blue};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray};
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 22px;
  padding: 12px 16px;
  width: 100%;
  transition: all 0.25s ease;

  &:focus,
  &:active {
    outline: 0;
    border-color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.red};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: inline-block;
`;
