import { useState, ChangeEvent, FC } from 'react';
import useAddListItem from '../../hooks/useAddListItem';
import { ActionButton, Input } from './styled'

type Props = {
  onSubmitAdditional: () => void,
}

const AddItemCard: FC<Props> = ({ onSubmitAdditional }) => {
  const [ itemName, setItemName ] = useState('')
  const addListItem = useAddListItem()

  const handleItemName = (e: ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value)
  }

  const handleSave = () => {
    addListItem(itemName)
    onSubmitAdditional()
  }

  return (
    <form name="addNewItem">
      <Input
        type="text"
        name="inputName"
        value={itemName}
        onChange={handleItemName}
        aria-label="todo-name-input"
      />
      <ActionButton aria-label="save-todo-name" onClick={handleSave}>Save</ActionButton>
    </form>
  )
}

export default AddItemCard;