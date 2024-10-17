import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextItem, DashedLine, CardItemContainer } from './styles';

export type CardItemProps = {
  productName: string;
  price: number;
  isTotal?: boolean;
  onViewDetails?: () => void;
};

export const CardItemSale = ({ productName, price, onViewDetails, isTotal }: CardItemProps) => {
  const theme = useTheme();
  return (
    <CardItemContainer>
      <TextItem>{productName}</TextItem>
      <DashedLine />
      <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <TextItem>{price.toFixed(2)} R$</TextItem>
        {!isTotal && (
        <TouchableOpacity onPress={onViewDetails}>
          <MaterialIcons size={30} color={theme.COLORS.BLUE_800} name="remove-red-eye" />
        </TouchableOpacity>
        )}
      </View>
    </CardItemContainer>
  );
};
