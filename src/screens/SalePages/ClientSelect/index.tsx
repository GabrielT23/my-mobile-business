import React from 'react';
import { Text, View, FlatList } from 'react-native'; // Importar FlatList
import { AppLayout } from '@layouts/AppLayout'; // Importar o Layout
import { ClientItem, Content, Input, Search, Title } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export default function ClientSelect() {
  const theme = useTheme();

  // Array de clientes
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

        {/* FlatList para renderizar os clientes */}
        <FlatList
          data={clients} // Array de dados
          keyExtractor={(item) => item.id} // Identificador único de cada item
          renderItem={({ item }) => (
            <ClientItem>
              <MaterialIcons color={theme.COLORS.WHITE} size={20} name='person' />
              <Text style={{ color: `${theme.COLORS.WHITE}` }}>{item.name}</Text>
            </ClientItem>
          )}
        />
        
      </Content>
    </AppLayout>
  );
}

