// import React from 'react'
// This holds the Expense Items data
import './ExpenseItems.css' 
const ExpenseItems = () => {
    return (
        <div className= "expense-items">
            <div>Date</div>
            <div className= "expense-item__description">
                <h2>item description</h2>
                <div className="expense-item__price">Item Amount</div>
            </div>
        </div>
    )
}

export default ExpenseItems
