import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues, useForm } from "react-hook-form";

interface Todo {
  id: number;
  text: string;
}

interface AppState {
  todos: Todo[];
}

const initialState: Todo[] = [];

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

const TODOS = "todos";
const ADD_TODO = "addTodo";
const DELETE_TODO = "deleteTodo";

const TodoList: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const todos = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  const onSubmit = (data: FieldValues) => {
    const { todo } = data;
    if (!todo.trim()) return;
    console.log(todo);
    dispatch({ type: `${TODOS}/${ADD_TODO}`, payload: todo });
    console.log(todos);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("todo")} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() =>
                dispatch({ type: `${TODOS}/${DELETE_TODO}`, payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
