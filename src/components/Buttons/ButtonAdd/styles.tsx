import styled from 'styled-components/native';


export const ContainerButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.SPACING.SM}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXTS};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 700;
`;
