import Navbar from "../components/Navbar";

import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../Store/Features/UserSlice";

import { useEffect } from "react";


import Preloader from "../components/Preloader/preloader";

const Home = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <p className="text-3xl text-center font-semibold m-5 text-orange-500">
        SYSTEM USERS
      </p>

      <div className="table-wrapper px-5">
        {loading ? (
          <>
          <p className="text-center text-orange-500 text-3xl">The data is still loading</p>
          </>
        ) : (
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
        )}
      </div>

      <Preloader/>
    </div>
  );
};

export default Home;
