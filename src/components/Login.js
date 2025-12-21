import React from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Username: </label>
      <input type="text" id="name" />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
