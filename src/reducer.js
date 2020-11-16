import React from 'react'



const Reducer = ((state, action) => {
    switch (action.type) {
       
        case 'REMOVE': {
            state.splice(action.payload, 1)
            console.log(action.payload)
            return [...state];

        }
        case 'ADD_TRANSACTION': {

            return [action.payload, ...state]

        }
        default:
            return state
    }
})

export default Reducer