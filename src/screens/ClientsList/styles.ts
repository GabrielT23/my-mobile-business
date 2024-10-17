import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 5px;
  padding: 0 10px;
  margin-right: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};
  padding: 10px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const TableCell = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const EyeButton = styled.TouchableOpacity`
  padding: 5px;
`;
