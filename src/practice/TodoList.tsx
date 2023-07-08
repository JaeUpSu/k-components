import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FieldValues, useForm } from "react-hook-form";
import { Todo } from "./Todo";
import { TodoProps } from "@/lib/configureStore";
import { TodoForm } from "./TodoForm";

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
    <div>
      <TodoForm />
      <ul>
        {todos.map((todo: TodoProps) => (
          <Todo text={todo.text} id={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
