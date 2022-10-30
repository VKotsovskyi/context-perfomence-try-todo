import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextWrapper';
import useEditUserName from '../../hooks/useEditUserName'
import { UserInputContainer } from './styled'


const User = () => {
  const { user } = useContext(UserContext)
  const editUserName = useEditUserName()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editUserName(e.target.value)
  }
  return (
    <UserInputContainer>
      <input
        type="text"
        name="userName"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </UserInputContainer>
  );
};

export default User;