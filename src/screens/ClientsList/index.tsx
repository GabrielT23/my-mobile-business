import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';
import { AppLayout } from '@layouts/AppLayout';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Container, SearchArea, SearchInput, ButtonIcon, TableHeader, TableRow, TableCell, EyeButton } from './styles';
import { TableClients } from '@components/Tables/TableClients';

interface Client {
  id: number;
  name: string;
  balance: number;
  lastDate: string;
}

export default function ClientList() {
  const theme = useTheme();
  
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: 'João Silva', balance: 5000000000, lastDate: '2024-10-10' },
    { id: 2, name: 'Maria Souza', balance: 120, lastDate: '2024-10-09' },
    { id: 3, name: 'Carlos Pereira', balance: 300, lastDate: '2024-10-08' },
  ]);

  const handleAddClient = () => {
    // Função para adicionar cliente
    console.log('Adicionar Cliente');
  };

  const handleFilterClients = () => {
    // Função para filtrar clientes
    console.log('Filtrar Clientes');
  };

  const handleViewDetails = (clientId: number) => {
    console.log(`Ver detalhes do cliente com ID: ${clientId}`);
  };

  const renderClientItem = ({ item }: { item: Client }) => (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{`R$ ${item.balance}`}</TableCell>
      <TableCell>{item.lastDate}</TableCell>
      <TableCell>
        <EyeButton onPress={() => handleViewDetails(item.id)}>
        <MaterialIcons size={30} color={theme.COLORS.BLUE_800} name="remove-red-eye" />
        </EyeButton>
      </TableCell>
    </TableRow>
  );

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
