import React from "react";
import Header from './components/header'
import { IncomeExpense } from './components/incomeExpense'
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

          <IncomeExpense />
          <HistoryCom />
          <Transaction />

        </TransactionProvider>
       </div> 
    // {/* </div> */}
  );

}
export default App;