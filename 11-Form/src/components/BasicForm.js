import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    inputValue: nameValue,
    valueIsValid: nameValueIs,
    hasError: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput2(value => value.trim() !== '');
  const {
    inputValue: lastNameValue,
    valueIsValid: lastNameValueIs,
    hasError: lastNameError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput2(value => value.trim() !== '');
  const {
    inputValue: emailValue,
    valueIsValid: emailValueIs,
    hasError: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput2(value => value.includes('@'));
  
  // ✅ 전체 폼 유효성 검사
  let formIsValid = false;
  
  if(nameValueIs && lastNameValueIs && emailValueIs) {
    formIsValid = true;
  }

  // ✅ submit
  const submitHandelr = (event) => {
    event.preventDefault();


    if(!formIsValid) {
      return;
    }

    console.log("firstName : " + nameValue);
    console.log("lastName : " + lastNameValue);
    console.log("email : " + emailValue);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandelr}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameError && <p className="error-text">에러</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && <p className="error-text">에러</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">에러</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
