import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContextWrapper";
import { addListItem } from "../../actions/tasksActions";

const useAddListItem = () => {
  const { dispatch } = useContext(TasksContext);
  return addListItem(dispatch);
};

export default useAddListItem;
