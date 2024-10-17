import styled from 'styled-components/native';

export const Content = styled.View`
  align-items: start;
  justify-content: start;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const DashedLine = styled.View`
  flex: 1;
  height: 1px;
  margin: 0 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLUE_800};
  border-style: dashed;
`;

export const TextItem = styled.Text`
  margin-left: 1px;
  color: ${({ theme }) => theme.COLORS.BLUE_800};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const CardItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
