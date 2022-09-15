import React, { useState, createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {
  const [modaAddBatchIsShown, setModalAddBatchIsShown] = useState(false)
  const [modaAddUserIsShown, setModalAddUserIsShown] = useState(false)
  
  const data ={
    modaAddBatchIsShown,
    setModalAddBatchIsShown,
    modaAddUserIsShown, 
    setModalAddUserIsShown
  }

    return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider