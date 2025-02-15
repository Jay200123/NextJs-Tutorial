"use client";
import { useState } from "react";

export default function () {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <label htmlFor="fullname">Fullname</label>
      <input
        type="text"
        onChange={(e) => setFullname(e.target.value)}
        id="fullname"
        name="fullname"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
      />
    </form>
  );
}
