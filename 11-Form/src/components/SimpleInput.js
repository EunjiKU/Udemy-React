import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enterdName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enterdEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  console.log(enteredNameIsValid);
  console.log(enteredEmailIsValid)

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
    
  // ✅ Submit 버튼 클릭
  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log("useState : " + enterdName);
    resetNameInput();
    console.log("useState : " + enterdEmail);
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enterdName} type='text' id='name'
          onChange={nameChangeHandler} onBlur={nameBlurHandler} />
      </div>
      {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input value={enterdEmail} type='email' id='email'
          onChange={emailChangeHandler} onBlur={emailBlurHandler} />
      </div>
      {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
