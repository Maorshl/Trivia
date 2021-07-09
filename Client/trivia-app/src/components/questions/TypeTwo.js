import axios from "axios";
import React, { useState, useEffect } from "react";
let correctText;

function TypeTwo({
  updateCounter,
  updateCounterIncorrect,
  setQuestionType,
  setCounter,
  stop,
  setAnswer,
}) {
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const [question, setQuestion] = useState(undefined);
  const [rated, setRated] = useState(undefined);
  const [showButton, setButton] = useState(false);
  const [next, showNext] = useState(false);

  const getTypeTwoQuestion = async () => {
    const { data } = await axios.get("/typetwo");
    setQuestion(data);
  };
  useEffect(() => {
    getTypeTwoQuestion();
  }, []);
  const correctWrapper = () => {
    correct();
    updateCounter();
    setButton(true);
    showNext(true);
    setAnswer(undefined, 1);
    stop();
  };

  const inCorrectWrapper = () => {
    inCorrect();
    updateCounterIncorrect();
    setButton(true);
    showNext(true);
    setAnswer(correctText, 2);
    stop();
  };
  if (question) {
    for (let country of question.countries) {
      if (country.country === question.askOn) {
        correctText = country[question.column];
      }
    }

    let buttonArray = [];
    if (!showButton) {
      for (let country of question.countries) {
        if (country.country === question.askOn) {
          buttonArray.push(
            <button key={getNewKey()} onClick={() => correctWrapper()}>
              {country[question.column]}
            </button>
          );
        } else {
          buttonArray.push(
            <button key={getNewKey()} onClick={() => inCorrectWrapper()}>
              {country[question.column]}
            </button>
          );
        }
      }
    }
    let buttons;
    if (!rated) {
      buttons = getButtonList(question, setRated);
    } else {
      buttons = <h1>Thank you for rating</h1>;
    }
    let nextButton = undefined;
    if (next) {
      nextButton = (
        <button
          onClick={() => {
            setQuestionType(2);
            setCounter();
          }}
        >
          next question
        </button>
      );
    }

    return (
      <div className="TypeTwo">
        <h1>
          {question.template} {question.askOn}
        </h1>
        {buttonArray}
        <div className="rating">{buttons}</div>
        {nextButton}
      </div>
    );
  } else {
    return (
      <div className="TypeTwo">
        <h1>Question is loading...</h1>
      </div>
    );
  }
}

const correct = () => {
  //Add correct functionallity
};

const inCorrect = () => {
  //Add incorrect functionality
};

const getNewKey = () => {
  return 1000000 + Math.floor(Math.random() * 9000000);
};

const rateQuestion = async (rate, question, setRated) => {
  await axios.post("/savedquestion", {
    question: question.template + " " + question.askOn + "?",
    column: question.column,
    correct: question.correct,
    rating: rate,
    ratingCounter: 1,
    option1: question.countries[0][question.column],
    option2: question.countries[1][question.column],
    option3: question.countries[2][question.column],
    option4: question.countries[3][question.column],
  });
  setRated(true);
};

const getButtonList = (question, setRated) => {
  let buttonList = [];
  buttonList.push(<h3 key={getNewKey()}>Rate this question!</h3>);
  buttonList.push(
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(1, question, setRated)}
    >
      1
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(2, question, setRated)}
    >
      2
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(3, question, setRated)}
    >
      3
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(4, question, setRated)}
    >
      4
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(5, question, setRated)}
    >
      5
    </button>
  );
  return buttonList;
};
export default TypeTwo;
