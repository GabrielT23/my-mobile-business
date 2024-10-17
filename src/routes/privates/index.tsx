import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native"; 
import {
  useNavigation,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import Home from "@screens/Home";
import logo from "@assets/logo.png";
import Settings from "@screens/settings";
import { SaleRoutes } from "./sale.routes";
import ClientsList from "@screens/ClientsList";
import ProductsList from "@screens/ProductsList";

const { Navigator, Screen } = createDrawerNavigator();

export function PrivateRoutes() {
  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={({ route }) => {
        const currentRoute = getFocusedRouteNameFromRoute(route) || "home";

        return {
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: () =>
            currentRoute === "home" ? (
              <TouchableOpacity style={{margin: 10}}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <Feather name="menu" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{margin: 10}} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
              <Image
                source={logo}
                style={{ width: 40, height: 40, margin: 5 }}
              />
            </TouchableOpacity>
          ),
        };
      }}
    >
      <Screen
        name="salesRoutes"
        component={SaleRoutes}
        options={{
          title: "Realizar Venda",
        }}
      />
      <Screen
        name="settings"
        component={Settings}
        options={{
          title: "Configurações",
        }}
      />
      <Screen
        name="clientsList"
        component={ClientsList}
        options={{
          title: "Clientes",
        }}
      />
      <Screen
        name="productsList"
        component={ProductsList}
        options={{
          title: "Produtos",
        }}
      />
    </Navigator>
  );
}
