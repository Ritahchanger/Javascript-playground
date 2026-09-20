import { useEffect, useState } from "react";
import Todo from "./models/Todo.type";

import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [itemsPerPage] = useState<number>(10);

  const [loading, setLoading] = useState(false);

  const [totalTodos,setTotalTodos] = useState<number>(0);

  const totalPages = Math.ceil(totalTodos / itemsPerPage);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${itemsPerPage}`
        );

        setTodos(response.data);

        const total = parseInt(response.headers["x-total-count"],10);

        setTotalTodos(total || 200)

      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [currentPage, itemsPerPage]);

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <p>
                <strong>{todo.id}</strong>:{todo.title}
              </p>
              <p>status: {todo.completed ? "completed" : "Pending"}</p>
            </li>
          ))}

          {/* Pagination controls */}

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>

            <button onClick={()=>changePage(currentPage+1)}
              disabled={currentPage === totalPages}
              >
                Next
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default App;
