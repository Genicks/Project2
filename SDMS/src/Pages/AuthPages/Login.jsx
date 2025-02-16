import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authPgs.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "nick@gmail.com" && password === "nick") {
      navigate("/dashboard"); 
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate("/Register")
  }

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="redirect-Signup-con" onClick={handleRedirect}>
          <span className="redirect-Signup">
            Don't have an account? Click here
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
