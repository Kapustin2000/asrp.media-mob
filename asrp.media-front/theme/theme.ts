import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const LightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: '#ffffff', // Белый фон
    text: '#000000', // Чёрный текст
    primary: '#6200ea', // Фиолетовый основной цвет
    card: '#f5f5f5', // Цвет карточек
    border: '#dddddd',
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#121212', // Чёрный фон
    text: '#ffffff', // Белый текст
    primary: '#bb86fc', // Лавандовый основной цвет
    card: '#1f1f1f',
    border: '#444444',
  },
};
