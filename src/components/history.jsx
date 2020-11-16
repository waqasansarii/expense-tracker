import React, { useContext } from 'react'
import { ContextTransaction } from '../context'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export const HistoryCom = () => {
    let contestTransaction = useContext(ContextTransaction)
    let { transactions,  remove } = contestTransaction
    //   console.log(contestTransaction.transactions)
    const handleDelete=(index)=>{
        remove({
            index:index,
            
        })
// console.log(ev.target,index)
//    let splice = transactions.splice(index,1)
//    console.log(splice)
    }

    return (
        <div>
            <div className='history_div'>
                <h3>History </h3>
                {/* <br/> */}
                <hr />
            </div>
            <div className='history_li_div'>
                <ul className='history_ul'>
                    {transactions.map((value, index) => {
                        return (

                            <li className={value.amount > 0 ? 'green' : 'red'}  key={index}>
                                <DeleteForeverIcon  className='deleteICon' onClick={()=>handleDelete(index)}  />
                                {/* <button className='deleteICon' onClick={()=>handleDelete(index)}>x</button> */}
                                <span> {value.desc}</span>
                                <span> {value.amount}</span>
                            </li>
                        )

                    })}

                </ul>
            </div>
        </div>
    )
}

