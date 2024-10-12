import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home';
import Login from '@screens/Login';
import ClientSelect from '@screens/SalePages/ClientSelect';

const {Navigator, Screen} = createNativeStackNavigator();

export function PublicRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
            name='login'
            component={Login}
            />
            <Screen
            name='home'
            component={Home}
            />
            <Screen
            name='clientSelect'
            component={ClientSelect}
            />
        </Navigator>
    )
}