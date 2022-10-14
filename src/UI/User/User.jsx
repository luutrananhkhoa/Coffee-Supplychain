import React, { useContext, useState } from "react";
import Button from "../../Components/Button/Button";
import ModalAddUser from "../../Components/ModalAddUser/ModalAddUser";
import ModalAddFarmer from "../../Components/ModalAddFarmer/ModalAddFarmer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./User.scss";
import { useSelector, useDispatch } from "react-redux";
import { Context } from "../../Context/Context";
import detectEthereumProvider from "@metamask/detect-provider";
import { login } from "@/Redux/actions/loginAct";
import Web3 from "web3";
import { getContract as getContractFarmer } from "@contract/farmerContract";
import farmerInspectorLogin from "@hook/farmerInspectorLogin";
import SelectRole from "@/Components/SelectRole/SelectRole";

const User = () => {
  const {
    modaAddUserIsShown,
    setModalAddUserIsShown,
    dispatchLogin,
    loginState,
  } = useContext(Context);
  const [showModalAddFarmer, setShowModalAddFarmer] = useState(false);
  const [showModalChooseRole, setShowModalChooseRole] = useState(false);
  const onHandleConnectMetamask = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const address = accounts[0];
    console.log(address);
    dispatchLogin({ type: "CONNECT", address: address });
    const contractFarmer = await getContractFarmer().catch((error) => {
      console.error(error);
    });
    await farmerInspectorLogin(dispatchLogin, contractFarmer, address).catch(
      (error) => console.error(error)
    );
  };

  const addInspector = async () => {
    const contractFarmer = await getContractFarmer().catch((error) => {
      console.error(error);
    });
    contractFarmer.methods
      .addInspector(1)
      .send({ from: loginState.address })
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      {modaAddUserIsShown && <ModalAddUser />}
      {showModalAddFarmer && (
        <ModalAddFarmer setShowModalAddFarmer={setShowModalAddFarmer} />
      )}
      {showModalChooseRole &&(<SelectRole setShowModalChooseRole={setShowModalChooseRole}/>)}
      <Sidebar />
      <div className="content">
        <h1>Users</h1>
        <div className="buttonContainer">
          <div className="buttonLine">
            <button type="button" onClick={() => {
                setShowModalChooseRole(true);
              }}>Choose Role</button>
          </div>
        </div>
        {/* <div className="buttonContainer">
          <div className="buttonLine">
            <Button title="Create" />
          </div>
        </div> */}
        {/* <div className="buttonContainer">
          <div className="buttonLine">
            <button type="submit" onClick={onHandleConnectMetamask}>
              Connect Metamask
            </button>
          </div>
        </div> */}
        <div className="buttonContainer">
          <div className="buttonLine">
            <button
              type="submit"
              onClick={() => {
                setShowModalAddFarmer(true);
              }}
            >
              Add Farmer
            </button>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="buttonLine">
            <button type="submit" onClick={addInspector}>
              Add Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
