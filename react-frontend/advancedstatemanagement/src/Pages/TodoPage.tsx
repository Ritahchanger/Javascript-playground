import AddTodoComponent from "../components/AddTodoComponent";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

const TodoPage = () => {
  return (
    <div className="p-4">
      {/* Button styled link */}
      <Link
        to="/asynchronous/thunks"
        className="block px-6 py-3 text-sm bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 mb-4 mx-auto max-w-[300px] text-center"
      >
        ASYNCHRONOUS THUNKS IN STATE MANAGEMENT
      </Link>

      {/* Add Todo and Todo List components */}
      <AddTodoComponent />
      <TodoList />
    </div>
  );
};

export default TodoPage;
