import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/Store";
import { addTodo } from "../Redux/Features/TodoSlice";

const AddTodoComponent = () => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText(""); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-3xl font-semibold text-gray-700">Add Todo</h1>

      <div className="flex flex-col items-center space-y-2">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new task"
          className="px-4 py-2 border border-gray-300 rounded-lg w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAddTodo}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodoComponent;
