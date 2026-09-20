import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./Pages/TodoPage";
import UsersPage from "./Pages/UsersPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TodoPage />} />
          <Route path="/asynchronous/thunks" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
