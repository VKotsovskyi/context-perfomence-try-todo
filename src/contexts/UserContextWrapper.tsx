import React, { createContext, useReducer } from 'react';
import userReducer from '../reducers/userReducer'
import { UserContextType } from '../types/contextTypes';

export const UserContext = createContext<UserContextType>({
  user: {
    name: ''
  },
  dispatch: () => {}
});


type Props = {
  children: React.ReactNode,
};

function UserContextWrapper({ children }: Props) {
  const [user, dispatch] = useReducer(userReducer, { name: '' });
  return (
    <UserContext.Provider value={{user, dispatch}}>
      { children }
    </UserContext.Provider>
  );
}

export default UserContextWrapper;