import React, { useState } from 'react';
import useAddListItem from '../../hooks/useAddListItem';

type Props = {
  showAddButton: () => void,
};

const AddItemCard = ({ showAddButton }: Props) => {
  const [ itemName, setItemName ] = useState('')
  const addListItem = useAddListItem()
  const handleItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value)
  }
  const handleSave = () => {
    addListItem(itemName)
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