import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { AppLayout } from '@layouts/AppLayout';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Container, SearchArea, SearchInput, ButtonIcon } from './styles';
import { TableClients } from '@components/Tables/TableClients';
import { Produtc } from '@dtos/products';
import { TableProducts } from '@components/Tables/TableProducts';

export default function ProductsList() {
  const theme = useTheme();
  
  const [products, setProduts] = useState<Produtc[]>([
    { id: 1, name: 'Camara de Ar', saleValue: 23, pucharseValue: 30 ,lastDate: '2024-10-10' },
    { id: 2, name: 'Pneu Tras', saleValue: 23, pucharseValue: 30, lastDate: '2024-10-09' },
    { id: 3, name: 'Aro Diant', saleValue: 23, pucharseValue: 30, lastDate: '2024-10-08' },
  ]);

  const handleAddProduct = () => {
    console.log('Adicionar produto');
  };

  const handleFilterProducts = () => {
    console.log('Filtrar produtos');
  };

  const handleViewDetails = (clientId: number) => {
    console.log(`Ver detalhes do produto com ID: ${clientId}`);
  };


  return (
    <AppLayout>
      <Container>
        <SearchArea>
          <SearchInput placeholder="Buscar produtos..." />
          <ButtonIcon onPress={handleAddProduct}>
            <MaterialIcons name="add" size={24} color={theme.COLORS.WHITE} />
          </ButtonIcon>
          <ButtonIcon onPress={handleFilterProducts}>
            <MaterialIcons name="filter-list" size={24} color={theme.COLORS.WHITE} />
          </ButtonIcon>
        </SearchArea>
        <TableProducts products={products}/>
      </Container>
    </AppLayout>
  );
}