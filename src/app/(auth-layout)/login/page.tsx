"use client";

import { useState } from "react";

export default function () {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        <h3>Login Value : {login}</h3>
        <h3>Password Value : {password}</h3>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          id="login"
          name="login"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
        />
      </form>
    </>
  );
}
