import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: ${({ theme }) => theme.SPACING.MD}px;
  margin-bottom: ${({ theme }) => theme.SPACING.SM}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
  color: ${({ theme }) => theme.COLORS.COLOR_INPUTS};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  padding: ${({ theme }) => theme.SPACING.MD}px;
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

export const Title = styled.Text`

  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.TITLES};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
`;

