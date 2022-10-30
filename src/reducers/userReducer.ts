import { Action } from "../types/contextTypes";
import { User } from "../types/userTypes";

export const EDIT_USER_NAME = "EDIT_USER_NAME";

const userReducer = (user: User, action: Action<string>) => {
  switch (action.type) {
    case EDIT_USER_NAME: {
      return {
        ...user,
        name: action.payload,
      };
    }
    default:
      throw new Error();
  }
};

export default userReducer;
