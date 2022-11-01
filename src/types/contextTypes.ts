import { Dispatch } from "react";
import { TasksGroupedByStatus } from "./taskTypes";
import { User } from "./userTypes";

export type ListContext = {
  tasks: TasksGroupedByStatus;
  dispatch: Dispatch<any>;
};
export type UserContextType = {
  user: User;
  dispatch: Dispatch<any>;
};

export type Action<T> = {
  type: string;
  payload: T;
};
