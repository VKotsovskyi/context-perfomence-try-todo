import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContextWrapper";
import { TaskStatus, TaskStatusType } from "../../types/taskTypes";
import Dasboard from "../dasboards/Dasboard";
import { DasboardsStyles } from "./styled";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <DasboardsStyles>
      {Object.values(TaskStatus).map((status: TaskStatusType) => (
        <Dasboard tasksList={tasks[status]} status={status} />
      ))}
    </DasboardsStyles>
  );
};

export default Tasks;
