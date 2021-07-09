import React from "react";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";

export default function Signup(props) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSigned, setSigned] = useState(false);

  const signup = () => {
    axios
      .post("/user/register", {
        name: name,
        password: password,
      })
      .then((result) => {
        setSigned(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <form action="/">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button type="submit " onClick={() => signup()}>
          Singup
        </button>
      </form>
      {isSigned && <Redirect to="/" />}
    </div>
  );
}
