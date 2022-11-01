import { Dispatch } from "react";
import { ADD_TO_LIST } from "../reducers/tasksReducer";
import { AddToListPayload } from "../types/taskTypes";

export const addListItem =
  (dispatch: Dispatch<any>) => (payload: AddToListPayload) => {
    dispatch({
      type: ADD_TO_LIST,
      payload: payload,
    });
  };
