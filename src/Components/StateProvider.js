//data layer
//for cart
//instaed of passing props from parents to child , we are creating it globally or centrally, so that everyone can use it without any dependency of any .js file

import React, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext();        //empty data layer

//build provider so we can wrap our entire app , then give access to above data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    
    <  StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
//State provider is a function for provider which will be called in index.js and will wrap app.js as children,
//we could do it without function too, but we dont wanna mess inside index.js
    

