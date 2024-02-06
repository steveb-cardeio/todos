import { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { getTodo } from '../../../store/slices/todoSlice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ErrorScreen from '../../../components/ErrorScreen';

interface TodoProps {
}

const padding = 10
const Todo: FC<TodoProps> = () => {
  const { bottom } = useSafeAreaInsets()
  const { id } = useLocalSearchParams();
  const todo = useSelector(getTodo(id as string))
  return (
    <>
      <Stack.Screen  options={{ title: 'Todo' }}/>
    <ScrollView style={styles.container} contentContainerStyle={[styles.contentContainer, { paddingBottom: bottom || padding }]}>
    { todo ? <>
      <Text variant={'titleLarge'} style={styles.title}>{todo?.name}{todo?.complete ? ' (Complete)' : ''}</Text>
      <Text>{todo?.description}</Text>
      <Text variant={'bodySmall'}>Created On: {todo?.createdAt}</Text>
    </> : <ErrorScreen />}
  </ScrollView>
    </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: { padding, gap: 8, flexGrow: 1 },
  title: { textAlign: 'center' }
});

export default Todo
