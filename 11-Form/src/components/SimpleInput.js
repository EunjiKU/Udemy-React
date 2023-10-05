import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enterdName, setEnterdName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = event => {
    setEnterdName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(enterdName === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log("useState : " + enterdName);

    const enteredValue = nameInputRef.current.value;
    console.log("useRef : " + enteredValue);

    // nameInputRef.current.value = ''; => ❌
    setEnterdName('');
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enterdName} type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
