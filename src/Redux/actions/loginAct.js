import * as loginConst from "../constrants/loginConst";

export const login = (data) => {
  return {
    type: loginConst.LOGIN,
    payload: { id: data.id, address: data.address },
  };
};

// export const loginReport = (data) => {
//   return async (dispatch) => {
//     dispatch(login(data));
//   };
// };
