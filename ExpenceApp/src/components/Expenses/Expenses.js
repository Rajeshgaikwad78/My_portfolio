import React, {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
const [filteredYear, setFilteredYear]=useState('2022');

const fiterChangeHandler =selectedYear =>{
    setFilteredYear(selectedYear)
};

const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
});

// let expensesContent = <p>No expense found.</p>
// if(filteredExpenses.length > 0 ){
//     expensesContent = filteredExpenses.map((expense)=>(
//         <ExpenseItem 
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date} /> 
//         ))
// }
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={fiterChangeHandler}
             />
             {/* {filteredExpenses.length === 0 && <p>No expense found.</p>}
             {filteredExpenses.length > 0 && 
             filteredExpenses.map((expense)=>(
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} /> 
                ))
                } */}
                <ExpensesList items={filteredExpenses}/>
            
                
            </Card>
        </div>

    )
}
export default Expenses;