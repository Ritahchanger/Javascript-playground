import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Redux/Store";
import { toggleTodo } from "../Redux/Features/TodoSlice";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.entities);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Todo List</h1>

      <ul className="space-y-4 w-full max-w-xl">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer ${
              todo.completed ? "bg-gray-200" : ""
            }`}
          >
            <span
              className={`text-lg ${
                todo.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
              onClick={() => {
                dispatch(toggleTodo(todo.id));
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
