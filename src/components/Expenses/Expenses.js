import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "./Filter";


/** This component displays filtered expenses.
 * 
 * 
*/

const Expenses = (props) => {
  console.log('<Expenses> : initiated')

  //const [filterYear, setFilterYear] = useState("2020");
  
  const optionHandler = (selectedYear) => {
    //setFilterYear(selectedYear);
    //props.filter=filterYear;
    //props.onChange(filterYear);
    props.onChange(selectedYear);
    console.log("here");
  };

  
  /**
   * show expenses as a list of ExpenseItem acc to filter.
   * option 1: show all expenses
   * option 2: show specific year
   * in both cases if the list is empty show information
   */
  let list = [];
  if (props.filterYear === "All") {
    console.log("here");
    list = props.expenses.map((element) => (
      <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    ));
  } else {
    list = props.expenses
      .filter((element) => element.date.getFullYear().toString() ===props.filter)
      .map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ));
  }
  if (list.length === 0) {
    list = <h2>NO EXPENSES</h2>;
  }

  return (
    <Card className="expenses">
      <Filter filterYear={props.filterYear} onChange={optionHandler}></Filter>
      {list}
    </Card>
  );
};

export default Expenses;
