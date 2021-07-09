import React, { useState } from "react";
import { Redirect } from "react-router";
import my from "./my.gif";
import my1 from "./my1.gif";
import my2 from "./my2.gif";
import my3 from "./my3.gif";
import my4 from "./my4.gif";
import my5 from "./my5.gif";
import "./First.css";

function First(props) {
  const [toLogin, setToLogin] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);

  return (
    <div className="loginAndSignup">
      {toLogin && <Redirect to="/login"></Redirect>}
      {toSignUp && <Redirect to="/signup"></Redirect>}
      <section id="gifs1">
        <img src={my} alt="question-logo" className="question-image" />
        <img src={my1} alt="question-logo" className="question-image" />
        <img src={my2} alt="question-logo" className="question-image" />
      </section>
      <section id="container">
        <h1 id="welcome-header">How well do you know the world?</h1>
        <section>
          <p id="login">Already a user?</p>
          <button
            onClick={() => {
              setToLogin(true);
            }}
          >
            Login
          </button>
        </section>
        <section>
          <p id="register">Not a user yet?</p>
          <button
            onClick={() => {
              setToSignUp(true);
            }}
          >
            Register
          </button>
        </section>
      </section>
      <section id="gifs2">
        <img src={my5} alt="question-logo" className="question-image" />
        <img src={my3} alt="question-logo" className="question-image" />
        <img src={my4} alt="question-logo" className="question-image" />
      </section>
    </div>
  );
}

export default First;
