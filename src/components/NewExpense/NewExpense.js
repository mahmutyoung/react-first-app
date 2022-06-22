import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

  const saveExpenseDataHandler=(enteredExpenseData) =>{
    const expenseData={...enteredExpenseData,
       id:Math.random().toString()};

    /**
     * !DEBUG
     */
       console.log(expenseData);

       return expenseData;
  }

  
    
  return (
    <div className='new-expense'>
      <ExpenseForm onSavingExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;