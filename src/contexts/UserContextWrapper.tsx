import React, { createContext, useState, Dispatch } from 'react';
import todoReducer from '../reducers/todoReducer'
import { UserContextType } from '../types/contextTypes';

export const UserContext = createContext<UserContextType>({
  user: {
    name: ''
  },
  setUser: () => {}
});


type Props = {
  children: React.ReactNode,
};

function UserContextWrapper({ children }: Props) {
  const [user, setUser] = useState({name: ''});
  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  );
}

export default UserContextWrapper;