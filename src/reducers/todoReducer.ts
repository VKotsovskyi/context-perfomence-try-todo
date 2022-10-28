import { ListItem } from "../types/todoTypes"

export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CHANGE_ITEM_STATUS = 'CHANGE_ITEM_STATUS'

type Action = {
  type: string,
  payload: any
}

const todoReducer = (todoItems: ListItem[], action: Action) => {
  switch (action.type) {
    case ADD_TO_LIST: {
      return [
        ...todoItems,
        {
          id: todoItems.length,
          name: action.payload,
          isDone: false
        }
      ]
    }
    case REMOVE_ITEM: {
      return [...todoItems.filter((item: ListItem) => {
        return item.id !== action.payload
      })]
    }
    case CHANGE_ITEM_STATUS: {
      return [...todoItems.map((item: ListItem) => {
        return item.id === action.payload ? {...item, isDone: !item.isDone} : item
      })]
    }
    default:
      throw new Error();
    }
}

export default todoReducer;