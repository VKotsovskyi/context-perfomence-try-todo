import { useState } from 'react';
import AddItemCard from './AddItemCard';
import { ActionButton } from './styled'

const AddItem = () => {
  const [addItem, setAddItem] = useState(false)
  const handleAddItem = () => {
    setAddItem(true)
  }

  const showAddButton = () => setAddItem(false)

  return (
    <>
      {
        addItem
        ? <AddItemCard onSubmitAdditional={showAddButton}/>
        : <ActionButton onClick={handleAddItem}>Add Item</ActionButton>
      }
    </>
  )
}

export default AddItem;