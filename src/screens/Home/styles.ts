import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const SaleButton = styled.TouchableOpacity`
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
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.TITLES};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
`;