import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {ContextTransaction} from '../context'


export const Transaction =()=>{
    let {transactions,addition} = useContext(ContextTransaction)
    let [newDesc,setDesc] = useState('')
    let [newAmount,setAmount] = useState(0)
    // console.log(transactions,addition)

   const handleSetData=(event)=>{
        //   console.log('hi',event)
          event.preventDefault();
          addition({
              amount:newAmount,
              desc:newDesc
          })
    }


    return(
        <div>
            <div className='transaction_head_div'>
                <h3>Add Transaction</h3>
                <hr/>
            </div>
            <div>
                <form className='transaction_form' onSubmit={handleSetData} >
                    <label htmlFor=""> Text <br/>
                        <input className='input' onChange={(event)=>setDesc(event.target.value)} type="text" required placeholder='Enter Text'/>
                    </label> <br/> <br/>
                    <label htmlFor=""> Amount <br/> 
                    <p>(negative - expense, positive - income)</p>
                        <input className='input' type="number" onChange={(event)=>setAmount(event.target.value)} required placeholder='Enter amount'/>
                    </label> <br/>
                    <input type="submit" className='input_btn' value='Add Transaction'/>
                </form>
            </div>
        </div>
    )
}