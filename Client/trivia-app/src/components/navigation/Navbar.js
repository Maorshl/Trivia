import Login from "../login/Login";
import Signup from "../login/Signup";
import GameOver from "../gameOver/GameOver";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import Cookies from "js-cookie";
import Home from "../Home/Home";
import First from "../Home/First.js";
import exit from "./exit.png";


function Navbar() {
  const [player, setPlayer] = useState({});
  const logout = async () => {
    await axios.post("/user/logout", { refToken: Cookies.get("refreshToken") });
    setPlayer({});
    Cookies.remove("token");
    Cookies.remove("refreshToken");
  };

  return (
    <div id="navbar">
      <Router>
        <nav>
          <ul className="navbarlist">
            <li className="navbarli">
              <Link to="/">Home</Link>
            </li>
            <li className="navbarli">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li id="game-name">World Trivia Game</li>
            <li id="logout" className="navbarli logout" onClick={logout}>
              <Link to="/">
                {" "}
                <img id="exit" src={exit} /> Logout
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <First />
          </Route>
          <Route exact path="/login">
            <Login setPlayer={setPlayer} />
          </Route>
          <Route exact path="/leaderboard">
            <GameOver currentPlayer={undefined} />
          </Route>
          <Route exact path="/game">
            <Home player={player} setPlayer={setPlayer} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
