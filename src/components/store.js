
import React, { createContext,useReducer,useEffect } from 'react'
export const Context=createContext()
const initialState={
    user:''
}
const reducer=(state,action)=>{
    switch(action.type){
            case 'one':
                return{
                     ...state,
                     user:action.payload
                }

    }
      return state
}
export default function GlobalC({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <Context.Provider value={{state,dispatch}}>
                {children}
            </Context.Provider>
        </div>
    )
}
