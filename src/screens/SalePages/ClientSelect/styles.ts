import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Content = styled.View`
  align-items: start;
  justify-content: start;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const Search = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 5px;
    margin-bottom: 30px;
`;

export const ClientItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 10px;;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_400};
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_400};
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${({ theme }) => theme.SPACING.MD}px;
  margin-bottom: ${({ theme }) => theme.SPACING.SM}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
  color: ${({ theme }) => theme.COLORS.COLOR_INPUTS};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  background-color: transparent;
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