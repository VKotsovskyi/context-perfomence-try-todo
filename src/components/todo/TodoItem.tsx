import React from 'react';
import { ListItem } from "../../types/todoTypes"

type Props = {
  item: ListItem,
};

const TodoItem = ({ item }: Props) => {
  return (
    <li>
        {item.name}
    </li>
  );
};

export default TodoItem;