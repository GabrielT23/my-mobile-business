import styled from 'styled-components/native';

export const Title = styled.Text`
  padding-left: 40px;
  font-size: 20px;
  text-align: start;
  font-weight: bold;
  width: 100%;
  color: #333;
  margin-bottom: 20px;
`;

export const InfoSection = styled.View`
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 30px;
  align-items: center;
`;

export const InfoText = styled.Text`
  padding-left: 40px;
  font-size: 16px;
  width: 100%;
  color: #555;
  margin-bottom: 10px;
`;

export const OptionsSection = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const OptionButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 15px;
  border-radius: 8px;
  width: 200px;
  margin-bottom: 15px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export const LogoutButton = styled(OptionButton)`
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  width: 50%;
`;
