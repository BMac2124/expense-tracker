import React from 'react'

const ExpenseInfo = (props) => {
    return (
        <div className="info">
            <div>
                
                Info: {props.info.info} -- Date: {props.info.date}

            </div>
        </div>
    )
}

export default ExpenseInfo
