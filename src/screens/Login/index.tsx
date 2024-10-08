import React from 'react';
import { StatusBar } from 'expo-status-bar';
import logo from '@assets/logo3x.png'
import { TextInput, Button, ImageComponent, Image } from 'react-native';
import { Container, Input, SubmitButton, ButtonText, Title } from './styles';

export default function Login() {
  return (
    <Container>
      <Image style= {{marginBottom: 20}} source={logo}/>
      <Title>Faça Seu Login para acessar o aplicativo</Title>
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Senha" secureTextEntry />
      <SubmitButton>
        <ButtonText>Entrar</ButtonText>
      </SubmitButton>
      <StatusBar style="auto" />
    </Container>
  );
}

