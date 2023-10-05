import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if(action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched }
  }
  if(action.type === 'BLUR') {
    return { isTouched: true, value: state.value }
  }
  if(action.type === 'RESET') {
    return { isTouched: false, value: '' }
  }

  return initialInputState;
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  // ✅ 인풋 값 입력할 때마다
  const valueChangeHandler = event => {
    dispatch({type: 'INPUT', value: event.target.value});
  }

  // ✅ 인풋에서 포커스 잃었을 때
  const valueBlurHandler = event => {
    dispatch({type: 'BLUR'});
  }

  // ✅ 리셋
  const reset = () => {
    dispatch({type: 'RESET'});
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  }
}

export default useInput;