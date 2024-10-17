import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { AppLayout } from '@layouts/AppLayout'; // Componente de layout
import { useNavigation } from '@react-navigation/native';
import logo from '@assets/logo3x.png'
import { Title, InfoSection, InfoText, OptionsSection, OptionButton, ButtonText, LogoutButton } from './styles';
import { useAuthProvider } from '@contexts/AuthContext';

export default function Settings() {

  const { setIsAuthenticated } = useAuthProvider();
  const navigation = useNavigation();

  function handleChangePassword() {
  }

  function handleChangeEmail() {
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }



  return (
    <AppLayout isMenuDrawerVisible>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image style= {{marginBottom: 20}} source={logo}/>
      </View>

      <InfoSection>
        <Title>Informações</Title>
        <InfoText>Email: usuario@example.com</InfoText>
        <InfoText>Senha: ••••••••</InfoText>
      </InfoSection>


      <OptionsSection>
        <Title>Informações</Title>
        <OptionButton onPress={handleChangePassword}>
          <ButtonText>Alterar Senha</ButtonText>
        </OptionButton>
        <OptionButton onPress={handleChangeEmail}>
          <ButtonText>Alterar Email</ButtonText>
        </OptionButton>
      </OptionsSection>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <LogoutButton onPress={handleLogout}>
          <ButtonText>Sair</ButtonText>
        </LogoutButton>
      </View>
    </AppLayout>
  );
}

