import React from "react";
import Header from './components/header'
import { Income_Expense } from './components/incomeExpense'
import { HistoryCom } from './components/history'
import { Transaction } from './components/transaction'
import {TransactionProvider} from './context'

import './App.css'



function App() {
  return (
    // <div>
       <div className='container'>
          <Header />
        <TransactionProvider >

          <Income_Expense />
          <HistoryCom />
          <Transaction />

        </TransactionProvider>
       </div> 
    // {/* </div> */}
  );

}
export default App;