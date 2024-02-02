import React from "react";
import classes from './BMICalculator.module.css';
import Sliders from "./Sliders";

const App = () => {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
       <h1 className={classes.header}>Project 7: BMI CALCULATOR</h1>
       <Sliders />
      </main>
    </div>
     )
}


export default App;
