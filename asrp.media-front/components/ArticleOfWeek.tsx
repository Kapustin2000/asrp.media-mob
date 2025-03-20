import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_DOCUMENT_OF_WEEK } from '@/graphql/queries';

// type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

export function ArticleOfWeek() {

  const { loading, error, data } = useQuery(QUERY_DOCUMENT_OF_WEEK);

  if (loading) return <Text>Загрузка...</Text>;
  if (error) return <Text>Ошибка: {JSON.stringify(error)}</Text>;

  return (
    <View>
      <Text>{data?.documentOfWeek?.title || 'Нет данных'}</Text>
    </View>
  );
}
