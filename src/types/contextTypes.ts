import { Dispatch } from "react";
import { ListItem } from "./todoTypes";
import { User } from "./userTypes";

export type ListContext = {
  todoItems: ListItem[];
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
