import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./Pages/TodoPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
