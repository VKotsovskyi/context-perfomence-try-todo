import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContextWrapper';
import { ListItem } from "../../types/todoTypes"
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todoItems } = useContext(TodoContext);
  return (
    <ul>
      {todoItems.map((item: ListItem) => <TodoItem key={item.id} item={item} />)}
    </ul>
  );
};

export default TodoList;