import React, { useMemo, useState } from "react";
import { View, FlatList, ScrollView, Text } from "react-native";
import { AppLayout } from "@layouts/AppLayout";
import {
  ClientAreaView,
  Content,
  Title,
  ClientInfoContainer,
  SaleAreaView,
  SubTitle,
  ItemsAreaView,
  TotalAreaView,
  ButtonsAreaView,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useRoute, RouteProp } from "@react-navigation/native";
import { CardItemSale } from "@components/CardItemSale";
import { ButtonAdd } from "@components/Buttons/ButtonAdd";
import { ButtonSubmit } from "@components/Buttons/ButtonSubmit";
import { ButtonCancel } from "@components/Buttons/ButtonCancel";
import { AddProductModal } from "@components/Modals/ModalAddProduct";
import { AddServiceModal } from "@components/Modals/ModalAddService";

type ClientSaleRouteParams = {
  clientName: string;
};

type ClientSaleRouteProp = RouteProp<
  { clientSale: ClientSaleRouteParams },
  "clientSale"
>;

export default function ClientSale() {
  const theme = useTheme();
  const route = useRoute<ClientSaleRouteProp>();
  const { clientName } = route.params;

  const [products, setProducts] = useState([
    { id: 1, productName: "Caixa de direção 150", price: 53 },
    { id: 2, productName: "Pneu dianteiro 120/70", price: 200 },
  ]);

  const [services, setServices] = useState([
    { id: 1, productName: "Troca de óleo", price: 100 },
    { id: 2, productName: "Balanceamento de rodas", price: 150 },
  ]);

  const total = useMemo(() => {
    const totalProducts = products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    const totalServices = services.reduce(
      (sum, service) => sum + service.price,
      0
    );
    return totalProducts + totalServices;
  }, [products, services]);

  const handleViewDetails = (itemName: string) => {
    console.log(`Visualizar detalhes do item: ${itemName}`);
  };

  const [isProductModalVisible, setProductModalVisible] = useState(false);
  const [isServiceModalVisible, setServiceModalVisible] = useState(false);

  const handleOpenModalAddProduct = () => setProductModalVisible(true);
  const handleOpenModalAddService = () => setServiceModalVisible(true);

  
  const renderProductItem = ({
    item,
  }: {
    item: { id: number; productName: string; price: number };
  }) => (
    <CardItemSale
      productName={item.productName}
      price={item.price}
      onViewDetails={() => handleViewDetails(item.productName)}
    />
  );

  const renderServiceItem = ({
    item,
  }: {
    item: { id: number; productName: string; price: number };
  }) => (
    <CardItemSale
      productName={item.productName}
      price={item.price}
      onViewDetails={() => handleViewDetails(item.productName)}
    />
  );

  return (
    <>
      <AppLayout>
        {/* ScrollView apenas para as seções sem FlatList */}
        <ScrollView>
          <Content>
            <Title>Adicionar os Produtos e Serviços de Venda</Title>
            <ClientAreaView>
              <ClientInfoContainer>
                <MaterialIcons
                  name="people"
                  size={24}
                  color={theme.COLORS.BLUE_800}
                />
                <SubTitle>{clientName}</SubTitle>
              </ClientInfoContainer>

              <SaleAreaView>
                <ItemsAreaView>
                  <SubTitle>Produtos</SubTitle>
                  {/* FlatList fora do ScrollView */}
                  <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderProductItem}
                    scrollEnabled={false} // desabilitar scroll dentro da FlatList
                  />
                  <ButtonAdd
                    style={{ width: 150, marginTop: 10 }}
                    text="Adicionar Produto"
                    onPress={handleOpenModalAddProduct}
                  />
                </ItemsAreaView>

                <ItemsAreaView>
                  <SubTitle>Serviços</SubTitle>
                  {/* FlatList fora do ScrollView */}
                  <FlatList
                    data={services}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderServiceItem}
                    scrollEnabled={false} // desabilitar scroll dentro da FlatList
                  />
                  <ButtonAdd
                    style={{ width: 150, marginTop: 10 }}
                    text="Adicionar Serviço"
                    onPress={handleOpenModalAddService}
                  />
                </ItemsAreaView>
              </SaleAreaView>
              <CardItemSale productName="Total" price={total} isTotal />
              <ButtonsAreaView>
                <ButtonCancel style={{ width: 150 }} text="Cancelar" />
                <ButtonSubmit style={{ width: 150 }} text="Finalizar" />
              </ButtonsAreaView>
            </ClientAreaView>
          </Content>
        </ScrollView>
      </AppLayout>
      <AddProductModal
        visible={isProductModalVisible}
        onClose={() => setProductModalVisible(false)}
        setProducts={setProducts}
      />

      <AddServiceModal
        visible={isServiceModalVisible}
        onClose={() => setServiceModalVisible(false)}
        setServices={setServices}
      />
    </>
  );
}
