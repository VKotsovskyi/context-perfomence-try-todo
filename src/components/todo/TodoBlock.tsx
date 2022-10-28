import React from 'react';
import TodoList from './TodoList';
import AddItem from './AddItem';

const TodoBlock = () => {
  return (
    <div>
      <TodoList />
      <AddItem />
    </div>
  );
};

export default TodoBlock;