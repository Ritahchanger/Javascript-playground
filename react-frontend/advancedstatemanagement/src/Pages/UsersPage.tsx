import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../Redux/Features/UserSlice";

import { RootState, AppDispatch } from "../Redux/Store";

import { useEffect } from "react";

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="mb-4 p-4 border rounded-lg shadow-md hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">Username: {user.username}</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            <p className="text-sm text-gray-600">Website: {user.website}</p>

            <div className="mt-2">
              <h3 className="text-lg font-semibold">Address:</h3>
              <p className="text-sm text-gray-600">
                Street: {user.address.street}
              </p>
              <p className="text-sm text-gray-600">
                Suite: {user.address.suite}
              </p>
              <p className="text-sm text-gray-600">City: {user.address.city}</p>
              <p className="text-sm text-gray-600">
                Zipcode: {user.address.zipcode}
              </p>
              <p className="text-sm text-gray-600">
                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>

            <div className="mt-2">
              <h3 className="text-lg font-semibold">Company:</h3>
              <p className="text-sm text-gray-600">Name: {user.company.name}</p>
              <p className="text-sm text-gray-600">
                Catchphrase: {user.company.catchPhrase}
              </p>
              <p className="text-sm text-gray-600">BS: {user.company.bs}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
