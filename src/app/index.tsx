import { FlatList, StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from 'react-native-paper';
import { FC } from 'react';
import TodoItem from '../components/lists/items/TodoItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { getTodos } from '../store/slices/todoSlice';
import ErrorScreen from '../components/ErrorScreen';

const padding = 10
const Home: FC = () => {
  const { bottom } = useSafeAreaInsets();
  const todos = useSelector(getTodos);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'My Todos' }} />
      <FlatList keyExtractor={({ id }) => id}
                data={todos}
                style={styles.list} contentContainerStyle={[styles.listContentContainer, { paddingBottom: bottom || padding }]}
                ItemSeparatorComponent={() => <View style={{ height: padding }} />}
                ListEmptyComponent={<ErrorScreen message={'No Todos'} />}
                renderItem={(({ item, index }) => <TodoItem todo={item} index={index} />)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyContainer: { flex: 1, justifyContent: 'center' },
  list: { width: '100%' },
  listContentContainer: { flexGrow: 1, padding }
});

export default Home;
