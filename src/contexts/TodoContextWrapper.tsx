import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer'
import { ListContext } from '../types/contextTypes';

export const TodoContext = createContext<ListContext>({
  todoItems: [],
  dispatch: () => {}
});


type Props = {
  children: React.ReactNode,
};

function TodoContextWrapper({ children }: Props) {
  const [todoItems, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{todoItems, dispatch}}>
      { children }
    </TodoContext.Provider>
  );
}

export default TodoContextWrapper;