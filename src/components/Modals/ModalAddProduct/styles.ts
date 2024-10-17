import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Background = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const CloseButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const ModalContent = styled.View`
  padding: 20px 0;
`;

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  text-align: start;
  padding-right: 20px;

  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.TITLES};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
`;

export const SubmitButton = styled.Button`
  margin-top: 10px;
`;
