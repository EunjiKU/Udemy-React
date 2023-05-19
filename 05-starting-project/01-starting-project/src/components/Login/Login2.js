import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // input 값 체인지
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }

  // input 값 blur
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  }
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.includes('@'));
  }

  // Login 버튼 클릭시 아이디&비번 정보가 넘어감
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>Login</Button>
        </div>
      </form>
    </Card>
  )
}

export default Login;