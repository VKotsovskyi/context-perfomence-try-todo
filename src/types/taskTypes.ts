export type ListItem = {
  id: number;
  name?: string;
  status: TaskStatusType;
};

export const TaskStatus = {
  Todo: "Todo",
  InProgress: "InProgress",
  Done: "Done",
} as const;

export type TaskStatusType = typeof TaskStatus[keyof typeof TaskStatus];

export type TasksGroupedByStatus = {
  [TaskStatus.Todo]: ListItem[];
  [TaskStatus.InProgress]: ListItem[];
  [TaskStatus.Done]: ListItem[];
};

export type AddToListPayload = {
  name: string;
  status: TaskStatusType;
};

export type AddToListActionType = {
  type: "ADD_TO_LIST";
  payload: AddToListPayload;
};

export type RemoveItemActionType = {
  type: "REMOVE_ITEM";
  payload: {
    id: number;
    status: TaskStatusType;
  };
};

export type ChangeItemStatusActionType = {
  type: "CHANGE_ITEM_STATUS";
  payload: {
    id: number;
    status: TaskStatusType;
  };
};
