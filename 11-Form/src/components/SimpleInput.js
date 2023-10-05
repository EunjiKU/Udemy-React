import { useState } from 'react';

const SimpleInput = (props) => {
  const [enterdName, setEnterdName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enterdEmail, setEnterdEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enterdName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enterdEmail.includes('@'); // includes : 특정 문자열을 포함하는지 확인
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }

  // ✅ 인풋 값 입력할 때마다
  const nameInputChangeHandler = event => {
    setEnterdName(event.target.value);
  }
  const emailInputChangeHandler = event => {
    setEnterdEmail(event.target.value);
  }

  // ✅ 인풋에서 포커스 잃었을 때
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }
  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }

  // ✅ Submit 버튼 클릭
  const formSubmissionHandler = event => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log("useState : " + enterdName);
    setEnterdName('');
    setEnteredNameTouched(false);
    console.log("useState : " + enterdEmail);
    setEnterdEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enterdName} type='text' id='name'
          onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
      </div>
      {nameInputIsValid && <p className='error-text'>Name must not be empty.</p>}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input value={enterdEmail} type='email' id='email'
          onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
      </div>
      {emailInputIsValid && <p className='error-text'>Please enter a valid email.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
