import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";
import { TodoProps } from "@/lib/configureStore";

interface Todo {
  id: number;
  text: string;
}

interface AppState {
  todos: Todo[];
}

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todos);

  return (
    <ul>
      {todos.map((todo: TodoProps) => (
        <Todo text={todo.text} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
