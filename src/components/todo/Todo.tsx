import React from 'react';
import TodoBlock from './TodoBlock';
const Todo = () => {
  console.log('render')
  return (
    <>
      <h1>This is very important TODO</h1>
      <p>More important text just to pretend that all of this makes sence.</p>
      <TodoBlock />
    </>
  );
};

export default Todo;