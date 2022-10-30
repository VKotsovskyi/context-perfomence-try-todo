import React from 'react';
import TodoBlock from './TodoBlock';
import { TodoContainer } from './styled'
import { getRandomQuote } from './utils'

const Todo = () => {
  return (
    <TodoContainer>
      <h1>TODO</h1>
      <p>{getRandomQuote()}</p>
      <TodoBlock />
    </TodoContainer>
  );
};

export default Todo;