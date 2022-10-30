import React, { useState } from 'react';
import useAddListItem from '../../hooks/useAddListItem';
import { ActionButton, Input } from './styled'

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
      <Input
        type="text"
        name="inputName"
        value={itemName}
        onChange={handleItemName}
        aria-label="todo-name-input"
      />
      <ActionButton aria-label="save-todo-name" onClick={handleSave}>Save</ActionButton>
    </div>
  );
};

export default AddItemCard;