import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

function GameOver({
  currentPlayer,
  setPlayer,
  setTimer,
  setCount,
  setIncorrectCount,
  setQuestionCount,
}) {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [isPosted, setPosted] = useState(false);
  const [startNewGame, setstartNewGame] = useState(false);

  const getLeaderboard = async () => {
    const { data } = await axios.get("/user/leaderboard");
    setLeaderBoard(data);
  };
  useEffect(() => {
    getLeaderboard();
  }, []);

  const postUser = async (user) => {
    await axios.post("/user/score", {
      name: user.name,
      score: user.score,
    });
    setPosted(true);
    getLeaderboard();
  };
  const playAgain = () => {
    setPlayer({
      name: currentPlayer.name,
      score: 0,
      correct: 0,
      mistakes: 0,
    });
    setstartNewGame(true);
    setTimer(20);
    setCount(0);
    setIncorrectCount(0);
    setQuestionCount(1);
  };
  if (startNewGame) {
    return <Redirect to="/game"></Redirect>;
  }
  return (
    <div>
      {currentPlayer && (
        <div>
          <h1>
            {currentPlayer.name} You scored: {currentPlayer.score} points!
          </h1>
          <p>{currentPlayer.name}, You are the weakest link</p>
          {!isPosted && (
            <button
              id="question-button"
              onClick={() => {
                postUser(currentPlayer);
              }}
            >
              Post your Score!
            </button>
          )}
          <button id="rating-button" onClick={() => playAgain()}>
            Play another round!
          </button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Leaderboard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <th>score</th>
          </tr>
          {leaderBoard.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GameOver;
