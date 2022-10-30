import React from 'react';
import Todo from '../todo/Todo';
import User from '../user/User';
import { AppContainer } from './styled'

function App() {
  return (
    <AppContainer>
      <User />
      <Todo />
    </AppContainer>
  );
}

export default App;
