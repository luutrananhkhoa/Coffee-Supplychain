import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { getContract as getContractFarmer } from "@contract/farmerContract";
import { useNavigate } from "react-router-dom";
import { Context } from "@context/Context";
import farmerInspectorLogin from "@hook/farmerInspectorLogin";

function LoginMiddleware() {
  const [completed, setCompleted] = useState(false);
  const { dispatchLogin } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider();

      const web3 = new Web3(provider);

      await web3.eth
        .getAccounts()
        .then(async (success) => {
          const address = success[0];

          if (address) {
            dispatchLogin({ type: "CONNECT", address: address });
            const contractFarmer = await getContractFarmer().catch((error) => {
              console.error(error);
            });
            await farmerInspectorLogin(
              dispatchLogin,
              contractFarmer,
              address
            ).catch((error) => console.error(error));
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setCompleted(true);
    })();
  }, []);
  return <>{completed ? <Outlet></Outlet> : <MoonLoader color="#36d7b7" />}</>;
}

export default LoginMiddleware;
