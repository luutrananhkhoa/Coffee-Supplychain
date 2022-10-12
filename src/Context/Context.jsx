import React, { useState, createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Context = createContext();

const initialLogin = {
  address: undefined,
  id: undefined,
  accountType: undefined,
};
const loginReducer = (state, action) => {
  switch (action.type) {
    case "CONNECT": {
      return { ...state, address: action.address };
    }
    case "LOGIN":
      const time = new Date(new Date().getTime() + 86400000 * 7);
      Cookies.set("address", action.address, {
        path: "/",
        expires: time,
        secure: true,
        sameSite: true,
      });
      Cookies.set("accountType", action.accountType, {
        path: "/",
        expires: time,
        secure: true,
        sameSite: true,
      });
      Cookies.set("id", action.inspectorId, {
        path: "/",
        expires: time,
        secure: true,
        sameSite: true,
      });
      return {
        ...state,
        address: action.address,
        accountType: action.accountType,
        id: action.id,
      };
    default:
      return initialLogin;
  }
};

const ContextProvider = ({ children }) => {
  const [modaAddBatchIsShown, setModalAddBatchIsShown] = useState(false);
  const [modaAddUserIsShown, setModalAddUserIsShown] = useState(false);
  const [address, setAddress] = useState();
  const [loginState, dispatchLogin] = useReducer(loginReducer, initialLogin);
  const data = {
    modaAddBatchIsShown,
    setModalAddBatchIsShown,
    modaAddUserIsShown,
    setModalAddUserIsShown,
    address,
    setAddress,
    loginState,
    dispatchLogin,
  };
  console.log(loginState);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
