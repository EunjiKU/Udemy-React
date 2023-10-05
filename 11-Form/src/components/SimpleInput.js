import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enterdName, setEnterdName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enterdName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  // useEffect(() => {
    if(enteredNameIsValid) {
      formIsValid = true;
    }
    // else {
      // setFormIsValid(false);
    // }
  // }, [enteredNameIsValid]);

  // ✅ 인풋 값 입력할 때마다
  const nameInputChangeHandler = event => {
    setEnterdName(event.target.value);
  }

  // ✅ 인풋에서 포커스 잃었을 때
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  // ✅ Submit 버튼 클릭
  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameIsValid) {
      return;
    }

    console.log("useState : " + enterdName);
    setEnterdName('');
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enterdName} type='text' id='name'
          onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
      </div>
      {nameInputIsValid && <p className='error-text'>Name must not be empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
