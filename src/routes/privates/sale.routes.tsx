import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home';
import Login from '@screens/Login';
import ClientSale from '@screens/SalePages/ClientSale';
import ClientSelect from '@screens/SalePages/ClientSelect';

const {Navigator, Screen} = createNativeStackNavigator();

export function SaleRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
            name='home'
            component={Home}
            />
            <Screen
            name='clientSelect'
            component={ClientSelect}
            />
            <Screen
            name='clientSale'
            component={ClientSale}
            />
        </Navigator>
    )
}