import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState, useEffect, useRef } from "react";
import GameOver from "../gameOver/GameOver";

function Home({ player, setPlayer }) {
  const [questionType, setQuestionType] = useState(0);
  const [count, setCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [timer, setTimer] = useState(20);
  const [timerState, showTimer] = useState(true);
  const [text, setText] = useState("Click above to answer");
  const [questionCount, setQuestionCount] = useState(1);

  useInterval(() => {
    if (timerState) {
      if (timer > 0) setTimer(timer - 1);
      else if (timer <= 0) {
        updateCounterIncorrect();
        if (questionType !== 2) {
          setQuestionType(questionType + 1);
        } else {
          setQuestionType(0);
        }
        showTimer(true);
      }
    }
  }, 1000);

  useEffect(() => {
    const minus = player.correct / 2;
    const num = 20 - minus;
    if (timerState) {
      if (player.correct < 30) {
        return setTimer(num);
      }
      return setTimer(5);
    }
  }, [count]);
  const setAnswer = (correctAnswer, number) => {
    if (number === 0) {
      setText("Click above to answer");
    }
    if (number === 1) {
      setText("You are correct");
    }
    if (number === 2) {
      setText(`The answer is ${correctAnswer}`);
    }
  };
  const updateCounter = () => {
    setPlayer({
      name: player.name,
      score:
        player.score +
        ((1 - (20 - player.correct * 0.5 - timer) / (20 - count * 0.5)) * 70 +
          30),
      correct: player.correct + 1,
      mistakes: player.mistakes,
    });
  };
  const stop = () => {
    showTimer(false);
  };
  const setCounter = () => {
    setCount(count + 1);
    showTimer(true);
    setAnswer(undefined, 0);
    setQuestionCount(questionCount + 1);
  };
  const updateCounterIncorrect = () => {
    setIncorrectCount(incorrectCount + 1);
    setPlayer({
      name: player.name,
      score: player.score,
      correct: player.correct,
      mistakes: player.mistakes + 1,
    });
  };

  let currentQuestion;
  if (questionType === 0) {
    currentQuestion = (
      <TypeOne
        stop={stop}
        setAnswer={setAnswer}
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
        setCounter={setCounter}
      />
    );
  }

  if (questionType === 1) {
    currentQuestion = (
      <TypeTwo
        stop={stop}
        setAnswer={setAnswer}
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
        setCounter={setCounter}
      />
    );
  }

  if (questionType === 2) {
    currentQuestion = (
      <SavedQuestion
        stop={stop}
        setAnswer={setAnswer}
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
        setCounter={setCounter}
      />
    );
  }
  if (incorrectCount < 3) {
    return (
      <div id="Login">
        <h1>{player.name}</h1>
        <h3>Your Score is: {player.score.toFixed(1)}</h3>
        <h3>Correct answers: {player.correct}</h3>
        <h3>Incorrect answers: {incorrectCount}</h3>
        <h2>question number: {questionCount}</h2>
        {timerState && timer}
        {currentQuestion}
        {text}
      </div>
    );
  } else
    return (
      <GameOver
        currentPlayer={player}
        setPlayer={setPlayer}
        setTimer={setTimer}
        setCount={setCount}
        setIncorrectCount={setIncorrectCount}
        setQuestionCount={setQuestionCount}
      />
    );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Home;
