import React, { useState } from 'react';
import AddItemCard from './AddItemCard';

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
        : <button onClick={handleAddItem}>Add Item</button>
      }
    </div>
  );
};

export default AddItem;