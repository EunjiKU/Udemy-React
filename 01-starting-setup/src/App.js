import React, { useState } from 'react';

import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2022, 7, 14)},
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 11)},
  ];

  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // setExpense([expense, ...expenses]);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
