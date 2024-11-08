import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  useEffect(() => {
    const getUser = () => {
      setLoading(true);
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Authentication failed");
          }
        })
        .then((responseObject) => {
          setUser(responseObject.user);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };

    getUser();
  }, []);

  console.log(user);

  return (
    <div>
      {!user ? (
        <button onClick={google}>LOGIN WITH GOOGLE</button>
      ) : (
        <div>
          <div>
            {" "}
            <h2>Welcome {user.displayName} </h2> <img src={user.photos[0].value} />
          </div>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
