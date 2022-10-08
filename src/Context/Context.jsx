import React, { useState, createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {
  const [modaAddBatchIsShown, setModalAddBatchIsShown] = useState(false)
  const [modaAddUserIsShown, setModalAddUserIsShown] = useState(false)
  const [address, setAddress] = useState()

  const data ={
    modaAddBatchIsShown,
    setModalAddBatchIsShown,
    modaAddUserIsShown, 
    setModalAddUserIsShown,
    address, 
    setAddress
  }

    return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider