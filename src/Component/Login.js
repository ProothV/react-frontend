import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'https://your-api-url.com/login' with your actual API endpoint
      const response = await axios.post("E:/java full stack/React/ReactJs/bangbang/public/json/user.json", {
        email,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        console.log("Response:", response.data);
        // Perform further actions like storing token or navigating
      } else {
        setMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error logging in. Please check your credentials.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
