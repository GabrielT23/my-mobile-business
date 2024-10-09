import React from 'react';
import { StatusBar } from 'expo-status-bar';
import logo from '@assets/logo3x.png'
import { TextInput, Button, ImageComponent, Image } from 'react-native';
import { Container, Input, SubmitButton, ButtonText, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  function handleLoginUser() {
    navigation.navigate('home');
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

