import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm= (props) => {

  const [enteredTitle,setEnteredTitle]=useState('') 
  const [enteredAmount,setEnteredAmount]=useState('')
  const [enteredDate,setEnteredDate]=useState('')
 
  const titleChangeHandler=(event)=>setEnteredTitle(event.target.value);
  const amountChangeHandler=(event)=>setEnteredAmount(event.target.value);
  const dateChangeHandler=(event)=>setEnteredDate(event.target.value);

  const submitHandler = (event)=>{
    event.preventDefault();
    const data={title: enteredTitle,
    amount:enteredAmount,
    date:new Date(enteredDate)}
    props.onSavingExpenseData(data)
    console.log(data);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

/*   const [userInput, setUserInput]=useState({enteredTitle:'',
                                            enteredAmount:'',
                                            enteredDate:''})
                                        
  const titleChangeHandler=(event)=>{
    //it does not merge the previous data with the partially updated new data
    //we have to pass unchanged fields bc it is not a class, it is a function.
    setUserInput({enteredTitle: event.target.value,
    enteredAmount:userInput.enteredAmount,
    enteredDate:userInput.enteredDate})

    //spreading short-cut
    //setUserInput({...userInput,     
    //  enteredTitle: event.target.value})
  }

  const amountChangeHandler=(event)=>{
    setUserInput({enteredTitle:userInput.enteredTitle,
    enteredAmount: event.target.value,
    enteredDate:userInput.enteredDate})
  }
  const dateChangeHandler=(event)=>{
    setUserInput({enteredTitle:userInput.enteredTitle,
    enteredAmount: userInput.enteredAmount,
    enteredDate:event.target.value})
  }

  console.log(userInput) */

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label >Title</label>
          <input type='text' value={enteredTitle}  onChange={titleChangeHandler} ></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0.01' step='0.01'  onChange={amountChangeHandler} ></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
        <div className='new-expense__actions'>
          <button type='submit' >Add</button>
        </div>
      </div>
    </form>
        
    );

}
export default ExpenseForm;