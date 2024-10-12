import Login from '@screens/Login';
import {useFonts, Roboto_400Regular, Roboto_700Bold,} from '@expo-google-fonts/roboto'
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts( {Roboto_400Regular, Roboto_700Bold} );


  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes/> : <ActivityIndicator/> }

    </ThemeProvider>
  );
}


