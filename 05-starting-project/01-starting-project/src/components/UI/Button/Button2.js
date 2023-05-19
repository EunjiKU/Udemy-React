import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  <div
    className={`${classes.button} ${props.className}`}
    type={props.type || "button"}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </div>
}

export default Button;