import React, { useState } from 'react';
import Todo from './components/todo/Todo';
import User from './components/user/User';
import './App.css';

function App() {
  return (
    <>
      <User />
      <Todo />
    </>
  );
}

export default App;
