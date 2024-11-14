import AddTodoComponent from "../components/AddTodoComponent";
import TodoList from "../components/TodoList";

import { Link } from "react-router-dom";

const TodoPage = () => {
  return (
    <div>
      <Link to="/asynchronous/thunks">
        ASYNCHRONOUS THUNKS IN STATE MANAGEMENT
      </Link>
      <AddTodoComponent />

      <TodoList />
    </div>
  );
};

export default TodoPage;
