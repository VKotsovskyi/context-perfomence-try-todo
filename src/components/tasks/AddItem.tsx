import { useState, FC } from "react";
import AddItemCard from "./AddItemCard";
import { TaskStatusType } from "../../types/taskTypes";
import { ActionButton } from "./styled";

type Props = {
  status: TaskStatusType;
};

const AddItem: FC<Props> = ({ status }) => {
  const [addItem, setAddItem] = useState(false);
  const handleAddItem = () => {
    setAddItem(true);
  };

  const showAddButton = () => setAddItem(false);

  return (
    <>
      {addItem ? (
        <AddItemCard status={status} onSubmitAdditional={showAddButton} />
      ) : (
        <ActionButton onClick={handleAddItem}>Add Item</ActionButton>
      )}
    </>
  );
};

export default AddItem;
