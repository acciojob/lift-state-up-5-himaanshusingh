import React from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={() => setIsLoggedIn(true)}>
          <label for="name">Username:</label>
          <input type="text" name="name" id="name" />
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button>Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </>
  );
};

export default Login;
