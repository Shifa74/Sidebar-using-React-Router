import { Fragment, useState } from "react";
import classes from "./Sliders.module.css";
import Output from "./Ouput";

let defaultWeight = "50";
let defaultHeight = "150";

const Sliders = () => {
  const [weight, setWeight] = useState(defaultWeight);
  const [height, setHeight] = useState(defaultHeight);

  const weightChangeHandler = (event) => {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  };

  const heightChangeHandler = (event) => {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  };

  return (
    <Fragment>
      <div className={classes.sliders}>
        <p className={classes.sliderOutput}>Weight: {weight} kg</p>
        <input
          className={classes.inputSlider}
          type="range"
          step="1"
          min="40"
          max="220"
          onChange={weightChangeHandler}
        />
        <p className={classes.sliderOutput}>Height: {height} cm</p>
        <input
          type="range"
          min="140"
          max="220"
          className={classes.inputSlider}
          onChange={heightChangeHandler}
        />
      </div>
      <Output height={height} weight={weight}/>
    </Fragment>
  );
};

export default Sliders;
