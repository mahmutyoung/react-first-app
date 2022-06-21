import ExpenseHeader from './components/Expenses/ExpenseHeader';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  return (
      <div>
      <ExpenseHeader/>
      <NewExpense/>
      <Expenses/>
    </div>
  );
}

export default App;