import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmout = 294.67;
  return (
    <div className="expense-item">
      {/* Date객체이기 때문에 toISOString 메서드로 문자열로 출력 */}
      <div>{ expenseDate.toISOString() }</div>
      <div className="expense-item__description">
        <h2>{ expenseTitle }</h2>
        <div className="expense-item__price">{ expenseAmout }</div>
      </div>
    </div>
  )
}

export default ExpenseItem;