import { Redirect } from "react-router";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

// add route for sign up,

function Login({ setPlayer }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setLogged] = useState(false);

  const login = async () => {
    const { data } = await axios.post("/user/login", {
      name,
      password,
    });
    Cookies.set("token", data.accessToken);
    Cookies.set("refreshToken", data.refreshToken);
    setPlayer({
      name,
      score: 0,
      correct: 0,
      mistakes: 0,
    });
    setLogged(true);
  };

  return (
    <div id="Login">
      {isLogged && <Redirect to="/game"></Redirect>}
      <h2 id="login-welcome">
        Hello, <br /> Welcome Back!
      </h2>
      <div className="card">
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
          <button
            className="button-group"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div id="redirect">
        <p id="not-user">Not a user yet?</p>
        <Link to="/signup" id="redirect-span">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
