import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/graphql/queries';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <Text>Загрузка...</Text>;
  if (error) return <Text>Ошибка: {JSON.stringify(error)}</Text>;

  return (
    <View>
      {data?.countries?.map((country: { code: string; name: string; emoji: string }) => (
        <Text key={country.code}>{country.emoji} {country.name}</Text>
      ))}
    </View>
  );
}
