import React, { useState } from 'react';

import ExpenseItems from "./components/ExpenseItems";
import './App.css'


const App = () => {
  const [expenseData] = useState({

    expenses:

      [

        {
          id: 'Expense 1',
          title: 'Cable',
          amount: 200.00,

          when:
            [{
              date: '2021, 8, 25',
              info: 'xFinity'
            }]
        },

        {
          id: 'Expense 2',
          title: 'Car Insurance/Home Insurance',
          amount: 280.00,

          when:
            [{
              date: '2021, 2, 12',
              info: 'USAA'
            }]
        },

        {
          id: 'Expense 3',
          title: 'Car Loan',
          amount: 420.00,

          when:
            [{
              date: '2021, 8, 20',
              info: 'Navy Federal'
            }]
        },
        {
          id: 'Expense 4',
          title: 'Mortgage',
          amount: 760.00,

          when:
            [{
              date: '2021, 9, 07',
              info: 'Wells Fargo'
            }]
        },
      ]
  })

  const expenseList = expenseData.expenses.map((expense) => <ExpenseItems item={expense} />)

  return (
    <div className="parent">

      <div className="list">
        <p> <b>Expenses:</b> </p>
        <form>
          <input></input>
        </form>
        {expenseList}
        <button>Add</button>  
      </div>

    </div>

  );
}

export default App;
