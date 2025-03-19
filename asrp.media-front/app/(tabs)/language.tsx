import { useTranslation } from 'react-i18next';
import { Text, View, Button } from 'react-native';

export default function HomeScreen() {
  const { t, i18n } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{t('welcome')}</Text>
      <Button title={t('switchLang')} onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')} />
    </View>
  );
}
