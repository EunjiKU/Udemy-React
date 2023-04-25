import React, { useState } from 'react';

import CardItem from '../UI/CardItem';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <CardItem className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} ></ExpensesFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </CardItem>
    </div>
  )
}

export default Expense;