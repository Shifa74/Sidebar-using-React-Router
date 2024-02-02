import { useMemo } from 'react';
import classes from './Output.module.css';

const Output = (props) => {
   const calcultatedOutput = useMemo(() => {
      const calculatedHeight = props.height / 100;
       return (props.weight / (calculatedHeight * calculatedHeight)).toFixed(1);
},[props.height, props.weight])

   return <div className={classes.outputSection}>
      <p>Your BMI is</p>
      <p className={classes.output}>{calcultatedOutput}</p>
   </div>
};

export default Output;