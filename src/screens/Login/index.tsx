import React from 'react';
import { StatusBar } from 'expo-status-bar';
import logo from '@assets/logo3x.png'
import { TextInput, Button, ImageComponent, Image } from 'react-native';
import { Container, Input, SubmitButton, ButtonText, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuthProvider } from '@contexts/AuthContext';

export default function Login() {
  const {setIsAuthenticated} = useAuthProvider();
  function handleLoginUser() {
    setIsAuthenticated(true);
  }

  return (
    <Container>
      <Image style= {{marginBottom: 20}} source={logo}/>
      <Title>Faça Seu Login para acessar o aplicativo</Title>
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Senha" secureTextEntry />
      <SubmitButton onPress={handleLoginUser}>
        <ButtonText>Entrar</ButtonText>
      </SubmitButton>
      <StatusBar style="auto" />
    </Container>
  );
}

