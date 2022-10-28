import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContextWrapper';

const User = () => {
  const { user, setUser } = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: e.target.value
    })
  }
  return (
    <div>
      <input type="text" name="userName" value={user.name} onChange={handleChange} />
    </div>
  );
};

export default User;