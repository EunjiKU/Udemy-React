import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enterdName, setEnterdName] = useState('');

  const nameInputChangeHandler = event => {
    setEnterdName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log("useState : " + enterdName);

    const enteredValue = nameInputRef.current.value;
    console.log("useRef : " + enteredValue);

    // nameInputRef.current.value = ''; => ❌
    setEnterdName('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enterdName} type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
