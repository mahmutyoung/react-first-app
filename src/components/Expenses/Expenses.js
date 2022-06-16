import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';

const Expenses= (props) => {
    const expenses = [
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
      ];
    const elements=expenses;
    const list=elements.map(element=>
        
        <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />)
    
   
    
    return(
        <Card className='expenses'>
        {list}
      </Card>
    );

}

export default Expenses;