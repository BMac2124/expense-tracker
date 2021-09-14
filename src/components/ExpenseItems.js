import React from 'react'
// This holds the Expense Items data
import ExpenseInfo from "./ExpenseInfo"

const ExpenseItems = (props) => {
    const infoList = props.item.when.map((dates)=><ExpenseInfo info={dates}/>)
    
    return (
        <div>
            <ul>
                <li>{props.item.id}</li>
           <li>{props.item.title} - {props.item.amount}</li>
            </ul>
            {infoList}
        </div>
    )
}

export default ExpenseItems
