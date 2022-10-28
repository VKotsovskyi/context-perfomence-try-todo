import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextWrapper';
import useEditUserName from '../../hooks/useEditUserName'


const User = () => {
  const { user } = useContext(UserContext)
  const editUserName = useEditUserName()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editUserName(e.target.value)
  }
  return (
    <div>
      <input type="text" name="userName" value={user.name} onChange={handleChange} />
    </div>
  );
};

export default User;