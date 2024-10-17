import { ScrollView } from "react-native";
import {
  TableCell,
  TableColumn,
  TableContainer,
  TableColumnHeader,
  TextCell,
  TextHeader,
} from "./styles";
import { Client } from "@dtos/clients";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

type TableProps = {
  clients: Array<Client>;
};

export function TableClients({ clients }: TableProps) {
  const theme = useTheme();

  return (
    // Habilitar scroll horizontal
    <ScrollView horizontal>
      <ScrollView>
      <TableContainer>
        {/* A table container agora vai envolver as colunas e terá scroll horizontal */}
        {/* Envolver o conteúdo das colunas em outro ScrollView para ter scroll vertical */}
          {/* Coluna de Nomes */}
          <TableColumn>
            <TableColumnHeader>
              <TextHeader style={{ textAlign: "center" }}>Cliente</TextHeader>
            </TableColumnHeader>
            {clients.map((client) => (
              <TableCell key={client.id}>
                <TextCell>{client.name}</TextCell>
              </TableCell>
            ))}
          </TableColumn>

          {/* Coluna de Valores */}
          <TableColumn>
            <TableColumnHeader>
              <TextHeader>Valor</TextHeader>
            </TableColumnHeader>
            {clients.map((client) => (
              <TableCell key={client.id}>
                <TextCell>{client.balance.toFixed(2)} R$</TextCell>
              </TableCell>
            ))}
          </TableColumn>

          {/* Coluna de Última Data */}
          <TableColumn>
            <TableColumnHeader>
              <TextHeader>Ultima data</TextHeader>
            </TableColumnHeader>
            {clients.map((client) => (
              <TableCell key={client.id}>
                <TextCell>{client.lastDate}</TextCell>
              </TableCell>
            ))}
          </TableColumn>

          {/* Coluna de Detalhes */}
          <TableColumn style={{ flex: 1 }}>
            <TableColumnHeader>
              <TextHeader>Detalhes</TextHeader>
            </TableColumnHeader>
            {clients.map((client) => (
              <TableCell key={client.id}>
                <TextCell>
                  <TouchableOpacity>
                    <MaterialIcons
                      size={20}
                      color={theme.COLORS.BLUE_800}
                      name="remove-red-eye"
                    />
                  </TouchableOpacity>
                </TextCell>
              </TableCell>
            ))}
          </TableColumn>
      </TableContainer>
      </ScrollView>
    </ScrollView>
  );
}

