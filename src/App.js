import ExpenseHeader from './components/Expenses/ExpenseHeader';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Chart from './components/Chart/Chart';
import { useState } from 'react';

/* const DUMMY = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; */
const App = () => {


  const [expenses, setExpenses] = useState([])
  const [filterYear, setFilterYear] = useState("2020");

  const addExpenseHandler = (newExpense) => {
    setExpenses(previousExpenses => {
      return [newExpense, ...previousExpenses]
    });
  }
  const optionHandler = selectedYear =>{
    setFilterYear(selectedYear);
    
  };
  
  const dataList = expenses.map(expense => {
    const data = { value: null, year: null, month: null }
    data.value = Number(expense.amount);
    data.month = expense.date.getMonth();
    data.year = expense.date.getFullYear();
    return data;
  })

 
  console.log(dataList);
  
  return (
    <div>
      <ExpenseHeader />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Chart dataPoints={dataList} chartFilterYear={filterYear}/>
      <Expenses items={expenses} filter={filterYear} onChange={optionHandler} />
    </div>
  );
}

export default App;