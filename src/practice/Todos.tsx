import React from "react";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";

const Todos: React.FC = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
