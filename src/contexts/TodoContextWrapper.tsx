import { FC, createContext, useReducer, ReactNode } from "react";
import todoReducer from "../reducers/todoReducer";
import { ListContext } from "../types/contextTypes";

export const TodoContext = createContext<ListContext>({
  todoItems: [],
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

const TodoContextWrapper: FC<Props> = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todoItems, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextWrapper;
