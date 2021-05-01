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
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>

      {/*sign up button*/}
      <div>
        <p>Not a user yet?</p>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
