import { todosReducer } from "@/practice/TodoForm";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export interface TodoProps {
  text: string;
  id: any;
}
