import { HeaderView } from "./styles";

import { Image, Text, TouchableOpacity } from "react-native";
import logo from '@assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

interface HeaderProps{
    isMenuDrawerVisible?: boolean
}

export function Header ({isMenuDrawerVisible}: HeaderProps){
    const navigation = useNavigation()
    function handleActionHeader() {
        navigation.goBack();;
      }
    return (
        <HeaderView>
            <TouchableOpacity onPress={handleActionHeader} style={{flex: 1}}>
                {isMenuDrawerVisible ? <MaterialIcons size={45} name="menu"/>: <MaterialIcons size={45} name="navigate-before"/>}
            </TouchableOpacity>
            <Image style= {{marginBottom: 20}} source={logo}/>
        </HeaderView>
    )
}