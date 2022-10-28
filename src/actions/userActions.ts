import { Dispatch } from 'react'
import { EDIT_USER_NAME } from '../reducers/userReducer'

export const editUserName = (dispatch: Dispatch<any>, userName: string) => {
  dispatch({
    type: EDIT_USER_NAME,
    payload: userName
  })
}