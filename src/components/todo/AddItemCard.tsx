import React, { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContextWrapper';
import { addListItem } from '../../actions/todoActions';


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
    addListItem(dispatch, itemName)
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