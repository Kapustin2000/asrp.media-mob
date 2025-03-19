import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/client';
import { ThemeProvider } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Stack } from 'expo-router';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/i18n';
import { LightTheme, DarkTheme } from '@/theme/theme';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  return <ThemeProvider value={isDark ? DarkTheme : LightTheme}>{children}</ThemeProvider>;
}

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>  
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeWrapper>
            <Stack />
          </ThemeWrapper>
        </Provider>
      </ApolloProvider>
    </I18nextProvider>
  );
}
