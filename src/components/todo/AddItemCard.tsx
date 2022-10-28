import React, { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContextWrapper';
import { ADD_TO_LIST } from '../../reducers/todoReducer'

type Props = {
  showAddButton: () => void,
};

const AddItemCard = ({ showAddButton }: Props) => {
  const [ itemName, setItemName ] = useState('')
  const { dispatch } = useContext(TodoContext);
  const handleItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value)
  }
  const handleSave = () => {
    dispatch({
      type: ADD_TO_LIST,
      payload: itemName
    })
    showAddButton()
  }
  return (
    <div>
      <input type="text"  name="inputName" value={itemName} onChange={handleItemName} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddItemCard;