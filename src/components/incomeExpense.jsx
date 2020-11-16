import React, { useContext, useState } from 'react'
import { ContextTransaction } from '../context'



export const Income_Expense = () => {


    const { transactions } = useContext(ContextTransaction)
    // console.log(transactions)



    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income = + transactions[i].amount;
            }
        }
        return income;
    }

    const getEspense = () => {
        let espense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                espense = + transactions[i].amount;
            }
        }
        return espense;
    }

    let total = getIncome() +getEspense()
    // console.log(total)

    return (

        <div>
           <div>
            <div className='balance_div'>
                <h2 className='balance_head'>Your Balance</h2>
                <h5 className='balance'>PKR : {total} </h5>
            </div>
         </div>
            
            <div className='main_income_expense_div'>
                <div className='income_div'>
                    <h2>INCOME</h2>
                    <h4>PKR : {getIncome()}</h4>
                </div>
                <hr />
                <div className='expense_div'>
                    <h2>EXPENSE</h2>
                    <h4>PKR : {getEspense()}</h4>
                </div>
            </div>
        </div>
    )
}