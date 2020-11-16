import React ,{createContext, useReducer} from 'react'
import Reducer from './reducer'

const InitialState =[
        {desc: 'salary',amount: '5000'},
        {desc:'bill',amount:'-200'},
        // {desc:'bill',amount:'-200'},
        // {desc:'bill',amount:'-200'}
]

 

export const ContextTransaction = createContext(InitialState);

export const TransactionProvider = ({children})=>{
    let [state , dispatch] = useReducer(Reducer,InitialState);

    // ADD LIST 

    function addition(data){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:{
                desc:data.desc,
                amount:data.amount
            }
        })
    }



    // DELETE LIST

    function remove(data){
        dispatch({
            type: 'REMOVE',
            payload:data.index
                

            
        })

    }
    return(
        <ContextTransaction.Provider value={{
            transactions:state,
            addition :addition,
            remove :remove
        }} >
        {children}
        </ContextTransaction.Provider>
    )
}




