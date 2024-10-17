import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { AppLayout } from '@layouts/AppLayout';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Container, SearchArea, SearchInput, ButtonIcon } from './styles';
import { TableClients } from '@components/Tables/TableClients';
import { Client } from '@dtos/clients';

export default function ClientList() {
  const theme = useTheme();
  
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: 'João Silva', balance: 5000000000, lastDate: '2024-10-10' },
    { id: 2, name: 'Maria Souza', balance: 120, lastDate: '2024-10-09' },
    { id: 3, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 4, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 5, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 6, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 7, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 8, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 9, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 10, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 11, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 12, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 13, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
    { id: 14, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
  ]);

  const handleAddClient = () => {
    console.log('Adicionar Cliente');
  };

  const handleFilterClients = () => {
    console.log('Filtrar Clientes');
  };

  const handleViewDetails = (clientId: number) => {
    console.log(`Ver detalhes do cliente com ID: ${clientId}`);
  };


  return (
    <AppLayout>
      <Container>
        <SearchArea>
          <SearchInput placeholder="Buscar cliente..." />
          <ButtonIcon onPress={handleAddClient}>
            <MaterialIcons name="add" size={24} color={theme.COLORS.WHITE} />
          </ButtonIcon>
          <ButtonIcon onPress={handleFilterClients}>
            <MaterialIcons name="filter-list" size={24} color={theme.COLORS.WHITE} />
          </ButtonIcon>
        </SearchArea>
        <TableClients clients={clients}/>
      </Container>
    </AppLayout>
  );
}
