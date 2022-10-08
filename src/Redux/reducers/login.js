import * as loginConst from "../constrants/loginConst";

const initialState = {
  id: undefined,
  address: undefined,
};
const reducer = (state, action) => {
  switch (action.type) {
    case loginConst.LOGIN: {
      return { ...state, ...action.payload };
    }

    default:
      return initialState;
  }
};
export default reducer;
