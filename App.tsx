import Login from '@screens/Login';
import {useFonts, Roboto_400Regular, Roboto_700Bold,} from '@expo-google-fonts/roboto'
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';
import {AuthContext, AuthContextProvider} from '@contexts/AuthContext'

export default function App() {

  const [fontsLoaded] = useFonts( {Roboto_400Regular, Roboto_700Bold} );



  return (
    <ThemeProvider theme={theme}>

      <AuthContextProvider>
        {fontsLoaded ? <Routes/> : <ActivityIndicator/> }
      </AuthContextProvider>

    </ThemeProvider>
  );
}


