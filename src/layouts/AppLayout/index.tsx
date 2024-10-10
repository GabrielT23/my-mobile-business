import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import { Header } from '@components/Header';

interface LayoutProps {
  children: React.ReactNode;
  isMenuDrawerVisible?: boolean;
}

export function AppLayout({ children, isMenuDrawerVisible }: LayoutProps) {
  return (
    <Container>
      <Header isMenuDrawerVisible={isMenuDrawerVisible} />
      {children}
      <StatusBar style="auto" />
    </Container>
  );
}
