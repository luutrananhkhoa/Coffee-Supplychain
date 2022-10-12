import { useContext } from "react";
import { getContract as getContractFarmer } from "@contract/farmerContract";
import { Context } from "@context/Context";

export default async function index(dispatchLogin, contractFarmer, address) {
  if (!address) {
    alert("not have address");
    return;
  }
  const dataLogin = await contractFarmer.methods
    .login()
    .call({ from: address })
    .catch((error) => {
      console.error(error);
    });
  if (!dataLogin) {
    return;
  }
  if (dataLogin?.accountType == 0) {
    alert("not a inspector");
    return;
  }
  dispatchLogin({
    type: "LOGIN",
    address: dataLogin.inspectorAddress,
    id: parseInt(dataLogin.inspectorId),
    accountType: parseInt(dataLogin.accountType),
  });
}
