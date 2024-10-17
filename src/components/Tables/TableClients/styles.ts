import styled from "styled-components/native";


export const TableContainer = styled.View`
  flex-direction: row;
  height: fit-content;
`;

export const TableColumn = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
  width: auto;
`;

export const TextCell = styled.Text`
  text-align: center;
  min-height: 25px;
  
`;

export const TextHeader = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TableColumnHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const TableCell = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-width: 0.5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;