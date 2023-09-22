import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHanlder = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumnber = +enteredAmount;

    // 값이 입력되자 않았거나, 1보다 작거나, 5보다 크거나
    if(enteredAmount.trim().length === 0 || enteredAmountNumnber < 1 || enteredAmountNumnber > 5 ) {
      // return해서 함수 실행 정지!!!
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumnber);
  }

  return (
    <form className={classes.form} onSubmit={submitHanlder}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          // id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
      <button>+ Add</button>
      {!amountIsValid && <p>유효한 수량(1-5)을 입력하세요!!!</p>}
    </form>
  )
}

export default MealItemForm;