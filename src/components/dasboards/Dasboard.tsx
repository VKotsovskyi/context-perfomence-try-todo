import { FC, memo } from "react";
import { ListItem, TaskStatusType } from "../../types/taskTypes";
import { DasboardContainer } from "./styled";
import TodoItem from "../tasks/TaskItem";
import AddItem from "../tasks/AddItem";

type Props = {
  tasksList: ListItem[];
  status: TaskStatusType;
};

const Dasboard: FC<Props> = ({ tasksList, status }) => {
  return (
    <DasboardContainer key={status}>
      {tasksList.map((item: ListItem) => (
        <TodoItem key={item.id} item={item} />
      ))}
      <AddItem status={status} />
    </DasboardContainer>
  );
};

export default memo(Dasboard);
