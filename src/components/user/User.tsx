import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContextWrapper';
import { EDIT_USER_NAME } from '../../reducers/userReducer'

const User = () => {
  const { user, dispatch } = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: EDIT_USER_NAME,
      payload: e.target.value
    })
  }
  return (
    <div>
      <input type="text" name="userName" value={user.name} onChange={handleChange} />
    </div>
  );
};

export default User;