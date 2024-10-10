import React from 'react';
import { View } from 'react-native'; // Importar View do react-native
import { SaleButton, ButtonText, Title } from './styles';
import { AppLayout } from '@layouts/AppLayout'; // Importar o novo Layout
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  function handleSaleClient() {
    navigation.navigate('clientSelect');
  }
  return (
    <AppLayout isMenuDrawerVisible>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Title>
          Realize uma venda facilmente!
          Basta clicar no botão abaixo
        </Title>
        <SaleButton onPress={handleSaleClient}>
          <ButtonText>Realizar Venda</ButtonText>
        </SaleButton>
      </View>
    </AppLayout>
  );
}

