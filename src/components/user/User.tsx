import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContextWrapper';
import { editUserName } from '../../actions/userActions'

const User = () => {
  const { user, dispatch } = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editUserName(dispatch, e.target.value)
  }
  return (
    <div>
      <input type="text" name="userName" value={user.name} onChange={handleChange} />
    </div>
  );
};

export default User;