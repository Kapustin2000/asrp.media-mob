import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, toggleTheme } from '@/store/store';
import { useTheme } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text, fontSize: 24 }}>Текущая тема: {isDark ? 'Тёмная' : 'Светлая'}</Text>
      <Button title="Переключить тему" onPress={() => dispatch(toggleTheme())} />
    </View>
  );
}
