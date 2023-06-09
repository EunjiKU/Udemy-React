import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import CardItem from '../UI/CardItem';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <li>
      <CardItem className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </CardItem>
    </li>
  )
}

export default ExpenseItem;