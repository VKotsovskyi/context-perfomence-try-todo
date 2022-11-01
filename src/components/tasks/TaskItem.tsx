import { FC } from "react";
import { ListItem as ListItemType } from "../../types/taskTypes";
import { ListItem } from "./styled";

type Props = {
  item: ListItemType;
};

const TaskItem: FC<Props> = ({ item }) => {
  return <ListItem>{item.name}</ListItem>;
};

export default TaskItem;
