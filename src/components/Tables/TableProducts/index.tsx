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
import { Produtc } from "@dtos/products";

type TableProductsProps = {
  products: Array<Produtc>;
};

export function TableProducts({ products }: TableProductsProps) {
  const theme = useTheme();

  const renderProductname = ({ item }: { item: Produtc }) => (
    <TableCell>
      <TextCell>{item.name}</TextCell>
    </TableCell>
  );

  const renderProductValue = ({ item }: { item: Produtc }) => (
    <TableCell>
      <TextCell>{item.saleValue.toFixed(2)} R$</TextCell>
    </TableCell>
  );

  const renderProductLastDate = ({ item }: { item: Produtc }) => (
    <TableCell>
      <TextCell>{item.lastDate}</TextCell>
    </TableCell>
  );
  const renderProductDetails = ({ item }: { item: Produtc }) => (
    <TableCell>
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
  );

  return (
    <ScrollView style={{}} horizontal>
      <ScrollView>
        <TableContainer>
          <TableColumn>
            <TableColumnHeader>
              <TextHeader style={{ textAlign: "center" }}>Produtos</TextHeader>
            </TableColumnHeader>
            {products.map((product) => (
              <TableCell key={product.id}>
                <TextCell>{product.name}</TextCell>
              </TableCell>
            ))}
          </TableColumn>
          <TableColumn>
            <TableColumnHeader>
              <TextHeader>Valor</TextHeader>
            </TableColumnHeader>
            {products.map((product) => (
              <TableCell key={product.id}>
                <TextCell>{product.saleValue.toFixed(2)} R$</TextCell>
              </TableCell>
            ))}
          </TableColumn>
          <TableColumn>
            <TableColumnHeader>
              <TextHeader>Ultima data</TextHeader>
            </TableColumnHeader>
            {products.map((product) => (
              <TableCell key={product.id}>
                <TextCell>{product.lastDate}</TextCell>
              </TableCell>
            ))}
          </TableColumn>
          <TableColumn style={{ flex: 1 }}>
            <TableColumnHeader>
              <TextHeader>detalhes</TextHeader>
            </TableColumnHeader>
            {products.map((product) => (
              <TableCell key={product.id}>
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
