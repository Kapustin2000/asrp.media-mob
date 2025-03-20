import { ArticleOfWeek } from '@/components/ArticleOfWeek';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  // const { data: { Documents: documents } } = useQuery(QUERY_DOCUMENTS);

  // if (loading) return <Text>Загрузка...</Text>;
  // if (error) return <Text>Ошибка: {JSON.stringify(error)}</Text>;

  return (
    <View>
        <ArticleOfWeek/>
    </View>
  );
}
