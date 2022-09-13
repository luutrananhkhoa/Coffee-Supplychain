import React, { useState, createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {
  const [modaAddBatchIsShown, setModalAddBatchIsShown] = useState(false)

  const data ={
    modaAddBatchIsShown,
    setModalAddBatchIsShown
  }

    return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider