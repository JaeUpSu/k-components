import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "@/practice/redux";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
