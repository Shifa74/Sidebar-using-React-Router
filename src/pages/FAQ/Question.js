import React, { useState } from "react";
import classes from './Question.module.css';

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const changeHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={classes.section}>
      <div className={isOpen ? classes.open : classes.closed}>
        <h4>{props.question.title}</h4>
        <button className={classes.button} onClick={changeHandler}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{props.question.info}</p>}
    </section>
  );
};

export default Question;
