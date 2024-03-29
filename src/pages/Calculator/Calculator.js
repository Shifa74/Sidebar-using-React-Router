import React from "react";
import Wrapper from "./components/Wrapper";
import classes from "./App.module.css";
import Screen from "./components/Screen";
import Buttonbox from "./components/Buttonbox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function Calculator() {
  return (
    <CalcProvider>
    <div className={classes.container}>
      <Wrapper>
        <Screen />
        <Buttonbox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </Buttonbox>
      </Wrapper>
    </div>
    </CalcProvider>
  );
}

export default Calculator;
