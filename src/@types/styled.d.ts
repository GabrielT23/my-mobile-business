// src/@types/styled.d.ts
import { DefaultTheme } from 'styled-components/native';
import 'styled-components';
import theme from '../theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

