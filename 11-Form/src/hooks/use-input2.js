import { useState } from "react";

const useInput2 = (valueChkHandler) => {
  const [inputValue, setInputValue] = useState('');
  const [touchInput, setTouchInput] = useState(false);

  const valueIsValid = valueChkHandler(inputValue);
  const hasError = touchInput && !valueIsValid;

  // ✅ 인풋 값 입력할 때마다
  const inputChangeHandler = event => {
    setInputValue(event.target.value);
  }

  // ✅ 인풋에서 포커스 잃었을 때
  const inputBlurHandler = () => {
    setTouchInput(true);
  }

  // ✅ reset 
  const reset = () => {
    setInputValue('');
    setTouchInput(false);
  }

  return {
    inputValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput2;