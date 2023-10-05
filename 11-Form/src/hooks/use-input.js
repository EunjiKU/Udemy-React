import { useState } from 'react';

const useInput = (validateValue) => {
  const [enterValue, setEnterValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterValue);
  const hasError = !valueIsValid && isTouched;

  // ✅ 인풋 값 입력할 때마다
  const valueChangeHandler = event => {
    setEnterValue(event.target.value);
  }

  // ✅ 인풋에서 포커스 잃었을 때
  const valueBlurHandler = event => {
    setIsTouched(true);
  }

  // ✅ 리셋
  const reset = () => {
    setEnterValue('');
    setIsTouched(false);
  }

  return {
    value: enterValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  }
}

export default useInput;