import React from "react";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";
import "./Signup.css";
import heart from "./heart1.png";

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
    <div id="Register">
      <h1 id="signUp">Joining is easy and free!</h1>
      <form action="/" className="card">
        <label className="input">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input__field"
            type="text"
            placeholder=" "
          />
          <span className="input__label">Username</span>
        </label>

        <label className="input">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input__field"
            type="text"
            placeholder=" "
          />
          <span className="input__label">Password</span>
        </label>

        <div className="button-group">
          <button className="button-group" onClick={() => signup()}>
            Submit
          </button>
        </div>
      </form>
      <h2 id="fun">See you in the leaderboard!</h2>
      <img src={heart} alt="black-heart" className="black-heart" />
      {isSigned && <Redirect to="/" />}
    </div>
  );
}
