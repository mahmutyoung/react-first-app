import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem= props => {
  console.log('<ExpenseItem> : initiated')
  const[title, setTitle]=useState(props.title);
  const clickHandler = ()=>{
    setTitle('Undefined');
    console.log(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate time={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Edit</button>
    </Card>
  );
}

export default ExpenseItem;