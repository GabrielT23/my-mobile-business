import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import logo from '@assets/logo3x.png';
import { Image } from 'react-native';
import { Container, Input, SubmitButton, ButtonText, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuthProvider } from '@contexts/AuthContext';

export default function Login() {
  const { setIsAuthenticated } = useAuthProvider();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const validEmail = 'teste@gmail.com';
  const validPassword = '1234';

  function handleLoginUser() {
    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  }

  return (
    <Container>
      <Image style={{ marginBottom: 20 }} source={logo} />
      <Title>Faça Seu Login para acessar o aplicativo</Title>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}  
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword} 
      />

      <SubmitButton onPress={handleLoginUser}>
        <ButtonText>Entrar</ButtonText>
      </SubmitButton>

      <StatusBar/>
    </Container>
  );
}


