import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

import { selectedUsers } from "../Store/Features/UserSlice";

const Home = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div>
      <Navbar />

      <p className="text-3xl text-center font-semibold m-5 text-orange-500">
        SYSTEM USERS
      </p>

      <div className="table-wrapper px-5">
        <table className="border-collapse w-full">
          <thead className="bg-neutral-200">
            <tr>
              <th className="px-2">IdNo</th>
              <th className="px-2">Name</th>
              <th className="px-2">Username</th>
              <th className="px-2">Email</th>
              <th className="px-2">Phone</th>
              <th className="px-2">Website</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td className="px-2">{user.id}</td>
                <td className="px-2">{user.name}</td>
                <td className="px-2">{user.username}</td>
                <td className="px-2">{user.email}</td>
                <td className="px-2">{user.phone}</td>
                <td className="px-2">{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
