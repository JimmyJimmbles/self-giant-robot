import styled from 'styled-components';

const BaseText = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};
  font-family: 'Merriweather', serif;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 24px;
  margin: 0;
`;

export default BaseText;
