import { FC, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTodos, setTodos } from '../../store/slices/todoSlice';
import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialTodos } from '../../constants/todos';

interface StoreSetupProps {
}

const StoreSetup: FC<StoreSetupProps> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        const initialized = await AsyncStorage.getItem('initialized')
        if (!initialized) {
          await AsyncStorage.setItem('initialized', 'true');
          await AsyncStorage.setItem('todos', JSON.stringify(initialTodos));
          dispatch(setTodos(initialTodos))
        } else {
          const todos = await AsyncStorage.getItem('todos');
          if (todos) {
            const parsedTodos = JSON.parse(todos);
            dispatch(setTodos(parsedTodos));
          }
        }
      } catch {

      }
    })()
  }, []);
  return <></>;
}

const styles = StyleSheet.create({});

export default StoreSetup
