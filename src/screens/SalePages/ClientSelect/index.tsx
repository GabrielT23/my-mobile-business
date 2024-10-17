import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { AppLayout } from '@layouts/AppLayout';
import { ClientItem, Content, Input, Search, Title } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ClientSelect() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleSelectSaleClient(clientName: string) {
    navigation.navigate('clientSale', {clientName});
  }

  const clients = [
    { id: '1', name: 'Rodrigo Gonçalves' },
    { id: '2', name: 'Maria Silva' },
    { id: '3', name: 'João Souza' },
    { id: '4', name: 'Ana Pereira' },
    { id: '5', name: 'Carlos Andrade' },
  ];

  return (
    <AppLayout>
      <Content>
        <Title>Selecione o Cliente</Title>
        
        {/* Barra de busca */}
        <Search>
          <Input placeholder="Digite o Nome do Cliente" keyboardType="web-search" />
          <MaterialIcons size={20} name='search' />
        </Search>
        <FlatList
          data={clients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectSaleClient(item.name)}>
              <ClientItem>
                <MaterialIcons color={theme.COLORS.WHITE} size={20} name='person' />
                <Text style={{ color: `${theme.COLORS.WHITE}` }}>{item.name}</Text>
              </ClientItem>
            </TouchableOpacity>
          )}
        />
        
      </Content>
    </AppLayout>
  );
}

