import {
  ListItem,
  TasksGroupedByStatus,
  AddToListActionType,
  ChangeItemStatusActionType,
  RemoveItemActionType,
} from "../types/taskTypes";

export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHANGE_ITEM_STATUS = "CHANGE_ITEM_STATUS";

const tasksReducer = (
  tasks: TasksGroupedByStatus,
  action:
    | AddToListActionType
    | ChangeItemStatusActionType
    | RemoveItemActionType
): TasksGroupedByStatus => {
  switch (action.type) {
    case ADD_TO_LIST: {
      const tasksByStatus = tasks[action.payload.status];
      return {
        ...tasks,
        [action.payload.status]: [
          ...tasksByStatus,
          {
            id: tasksByStatus.length,
            name: action.payload.name,
            status: action.payload.status,
          },
        ],
      };
    }
    case REMOVE_ITEM: {
      const tasksByStatus = tasks[action.payload.status];
      return {
        ...tasks,
        [action.payload.status]: [
          ...tasksByStatus.filter((item: ListItem) => {
            return item.id !== action.payload.id;
          }),
        ],
      };
    }
    case CHANGE_ITEM_STATUS: {
      const tasksByStatus = tasks[action.payload.status];
      return {
        ...tasks,
        [action.payload.status]: [
          ...tasksByStatus.map((item: ListItem) => {
            return item.id === action.payload.id
              ? { ...item, status: action.payload.status }
              : item;
          }),
        ],
      };
    }
    default:
      throw new Error();
  }
};

export default tasksReducer;
