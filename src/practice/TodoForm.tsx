import { FieldValues, useForm } from "react-hook-form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface Todo {
  id: number;
  text: string;
}

const initialState: Todo[] = [];

const TODOS = "todos";
const ADD_TODO = "addTodo";

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;

export const TodoForm = (): React.ReactElement => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: FieldValues) => {
    const { todo } = data;
    if (!todo.trim()) return;
    dispatch({ type: `${TODOS}/${ADD_TODO}`, payload: todo });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("todo")} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
