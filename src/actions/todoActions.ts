import { Dispatch } from 'react'
import { ADD_TO_LIST } from '../reducers/todoReducer'

export const addListItem = (dispatch: Dispatch<any>, itemName: string) => {
  dispatch({
    type: ADD_TO_LIST,
    payload: itemName
  })
}