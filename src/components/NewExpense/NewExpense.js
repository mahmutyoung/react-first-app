import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

  const addExpenseHandler = (newExpense) => {
    //const newExpense2=newExpense1;
    //const expenseData={...enteredExpenseData,
    // id:Math.random().toString()};
    
    props.onAddExpense(newExpense);

  }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;