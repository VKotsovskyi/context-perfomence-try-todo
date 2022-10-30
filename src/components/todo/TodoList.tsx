import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContextWrapper';
import { ListItem } from "../../types/todoTypes"
import TodoItem from './TodoItem';
import { ListItemContainer } from './styled';

const TodoList = () => {
  const { todoItems } = useContext(TodoContext);
  return (
    <ListItemContainer>
      {todoItems.map((item: ListItem) => <TodoItem key={item.id} item={item} />)}
    </ListItemContainer>
  );
};

export default TodoList;