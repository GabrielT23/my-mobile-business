import styled from 'styled-components/native';

export const Content = styled.View`
  align-items: start;
  justify-content: start;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const ClientAreaView = styled.View`
  align-items: start;
  justify-content: start;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const SaleAreaView = styled.View`
  align-items: start;
  justify-content: start;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-top: 10px;
`;
export const ButtonsAreaView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
`;


export const TotalAreaView = styled.View`
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

export const ItemsAreaView = styled.View`
  overflow: scroll;
  align-items: start;
  justify-content: start;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
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

export const ClientInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  margin-left: 10px;
  color: ${(props) => props.theme.COLORS.BLUE_800};
  font-size: 18px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;


