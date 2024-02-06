import { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Todo } from '../../../../types/todo.interface';
import { Icon, Text } from 'react-native-paper';
import { router } from 'expo-router';

interface TodoItemProps {
  todo: Todo
  index: number
}

const TodoItem: FC<TodoItemProps> = ({ todo, index}) => {
  return (<Pressable onPress={() => router.navigate(`/todo/${todo.id}`)} style={styles.container}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.titleContainer}>
        <Text variant={'titleMedium'} style={styles.textIndex}>{index + 1}.</Text>
        <Text variant={'titleMedium'}>{todo.name}</Text>
      </View>
      {todo.complete === true && <Icon size={24} source={'check'} color={'green'} />}
    </View>
    </Pressable>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    width: '100%',
    borderColor: '#00000066',
    borderRadius: 4,
    borderWidth: 1,
    padding: 8
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textIndex: {}
});

export default TodoItem
