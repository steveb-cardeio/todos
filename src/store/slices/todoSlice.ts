import { Todo } from '../../types/todo.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    }
  }
})

export const { setTodos } = counterSlice.actions

export const getTodos = (state: RootState) => state.todo.todos
export const getTodo = (id: string) => (state: RootState) => state.todo.todos.find(item => item.id === id);
export default counterSlice.reducer
