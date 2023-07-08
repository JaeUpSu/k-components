import { TodoProps } from "@/lib/configureStore";
import { useDispatch } from "react-redux";

const TODOS = "todos";
const DELETE_TODO = "deleteTodo";

export const Todo = ({ text, id }: TodoProps): React.ReactElement => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      {text}
      <button
        onClick={() =>
          dispatch({ type: `${TODOS}/${DELETE_TODO}`, payload: id })
        }
      >
        Delete
      </button>
    </li>
  );
};
