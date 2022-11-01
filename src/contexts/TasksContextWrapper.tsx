import { FC, createContext, useReducer, ReactNode } from "react";
import tasksReducer from "../reducers/tasksReducer";
import { ListContext } from "../types/contextTypes";
import { TaskStatus } from "../types/taskTypes";

const initialTasks = {
  [TaskStatus.Todo]: [],
  [TaskStatus.InProgress]: [],
  [TaskStatus.Done]: [],
};

export const TasksContext = createContext<ListContext>({
  tasks: initialTasks,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

const TasksContextWrapper: FC<Props> = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextWrapper;
