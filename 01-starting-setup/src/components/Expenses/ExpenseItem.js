import React from 'react';

import ExpenseDate from './ExpenseDate';
import CardItem from '../UI/CardItem';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("클릭!");
  }

  return (
    <CardItem className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">{ props.amount }</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </CardItem>
  )
}

export default ExpenseItem;