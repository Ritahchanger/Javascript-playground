import React, { useState,useEffect } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOAuthLogin = (provider) => {
    window.open(`http://localhost:5000/auth/${provider}`, "_self");
  };

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

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="oauth-buttons">
          <button
            className="oauth-button google"
            onClick={(google)}
          >
            Login with Google
          </button>
          <button
            className="oauth-button facebook"
            onClick={() => handleOAuthLogin("facebook")}
          >
            Login with Facebook
          </button>
          <button
            className="oauth-button github"
            onClick={() => handleOAuthLogin("github")}
          >
            Login with GitHub
          </button>
        </div>

        <div className="signup-link">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
