import React, { useState } from 'react';
import AddItemCard from './AddItemCard';
import { ActionButton } from './styled'

const AddItem = () => {
  const [addItem, setAddItem] = useState(false)
  const handleAddItem = (e: React.SyntheticEvent<EventTarget>): void => {
    setAddItem(true)
  }

  const showAddButton = () => setAddItem(false)

  return (
    <div>
      {
        addItem
        ? <AddItemCard showAddButton={showAddButton}/>
        : <ActionButton onClick={handleAddItem}>Add Item</ActionButton>
      }
    </div>
  );
};

export default AddItem;