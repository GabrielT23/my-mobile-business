import React from 'react';
import { View } from 'react-native'; // Importar View do react-native
import { SaleButton, ButtonText, Title } from './styles';
import { AppLayout } from '@layouts/AppLayout'; // Importar o novo Layout
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();
  function handleSaleClient() {
    navigation.navigate('clientSelect');
  }
  return (
    <AppLayout isMenuDrawerVisible>
        <Title>Configurações</Title>
    </AppLayout>
  );
}
