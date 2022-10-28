import React, { Dispatch, SetStateAction } from "react"
import { ListItem } from "./todoTypes"
import { User } from "./userTypes"

export type ListContext = {
  todoItems: ListItem[],
  dispatch: React.Dispatch<any>
  
}
export type UserContextType = {
  user: User,
  dispatch: React.Dispatch<any>
}

export type Action = {
  type: string,
  payload: any
}