import React, { Fragment } from "react";
import classes from "./Question.module.css";
import Question from "./Question";

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, velit fringilla tincidunt lacinia, orci odio sagittis lectus, non facilisis.",
  },
  {
    id: 2,
    title: "How much does it cost?" ,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, velit fringilla tincidunt lacinia, orci odio sagittis lectus, non facilisis.",
  },
  {
    id: 3 ,
    title: "When can i get it?" ,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, velit fringilla tincidunt lacinia, orci odio sagittis lectus, non facilisis."
  },
];

function App() {
  return (
    <Fragment>
      <h1 className={classes.heading}>Project 2: FAQ/Accordion</h1>
      <div className={classes.container}>
        <h2>Frequently Asked Questions</h2>
        <div>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
