import { FlatList, ScrollView, Text } from "react-native";
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


  const renderClientname = ({ item }: { item: Client }) => (
    <TableCell>
      <TextCell>{item.name}</TextCell>
    </TableCell>
  );
  
  const renderClientDebt = ({ item }: { item: Client }) => (
    <TableCell>
      <TextCell>{item.balance}</TextCell>
    </TableCell>
  );
  
  const renderClientLastDate = ({ item }: { item: Client }) => (
    <TableCell>
      <TextCell>{item.lastDate}</TextCell>
    </TableCell>
  );
  const renderClientLastDetails = ({ item }: { item: Client }) => (

    <TableCell>
      <TextCell>
        <TouchableOpacity>
          <MaterialIcons size={20} color={theme.COLORS.BLUE_800} name="remove-red-eye" />
        </TouchableOpacity>
      </TextCell>
    </TableCell>
  );
  
  return (
    <ScrollView style={{}} horizontal>
      <TableContainer>
        <TableColumn>
          <TableColumnHeader>
            <TextHeader style={{ textAlign: "center" }}>Cliente</TextHeader>
          </TableColumnHeader>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderClientname}
          />
        </TableColumn>
        <TableColumn>
          <TableColumnHeader>
            <TextHeader>Valor</TextHeader>
          </TableColumnHeader>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderClientDebt}
          />
        </TableColumn>
        <TableColumn>
          <TableColumnHeader>
            <TextHeader>Ultima data</TextHeader>
          </TableColumnHeader>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderClientLastDate}
          />
        </TableColumn>
        <TableColumn style={{ flex: 1 }}>
          <TableColumnHeader>
            <TextHeader>detalhes</TextHeader>
          </TableColumnHeader>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderClientLastDetails}
          />
        </TableColumn>
      </TableContainer>
    </ScrollView>
  );
}
