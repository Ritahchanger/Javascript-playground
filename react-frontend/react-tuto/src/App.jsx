import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import UserManagement from "./pages/UserManagement";
import Books from "./pages/Books";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
