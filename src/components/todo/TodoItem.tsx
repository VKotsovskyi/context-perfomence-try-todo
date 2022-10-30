import { FC } from 'react'
import { ListItem as ListItemType } from "../../types/todoTypes"
import { ListItem } from './styled'

type Props = {
  item: ListItemType,
}

const TodoItem: FC<Props> = ({ item }) => {
  return (
    <ListItem>
        {item.name}
    </ListItem>
  )
}

export default TodoItem;