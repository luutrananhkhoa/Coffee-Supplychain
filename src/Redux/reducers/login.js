import * as loginConst from "../constrants/loginConst";
import Cookies from "js-cookie";

const initialState = {
  id: undefined,
  address: undefined,
};
const reducer = (state, action) => {
  switch (action.type) {
    case loginConst.LOGIN: {
      const time = new Date(new Date().getTime() + 86400000 * 7)
      Cookies.set("address", action.payload.address, {
        path: "/",
        expires: time,
        secure: true,
        sameSite: true,
      });
      return { ...state, ...action.payload };
    }

    default:
      return initialState;
  }
};
export default reducer;
