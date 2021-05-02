import React, { useState } from "react";
import { Redirect } from "react-router";
import CorrectAnswer from "../questions/CorrectAnswer";

function First(props) {
  const [toLogin, setToLogin] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);
  return (
    <div className="loginAndSignup">
      {toLogin && <Redirect to="/login"></Redirect>}
      {toSignUp && <Redirect to="/signup"></Redirect>}
      <button
        onClick={() => {
          setToLogin(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setToSignUp(true);
        }}
      >
        SignUp
      </button>
    </div>
  );
}

export default First;
