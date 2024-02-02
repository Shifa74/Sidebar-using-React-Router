import React from 'react';
import classes from './ButtonBox.module.css';


const Buttonbox = ({children}) => {
  return (
    <div className={classes.buttonBox}>{children}</div>
  )
}

export default Buttonbox
