import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${({ theme }) => theme.SPACING.XS}px;
`;