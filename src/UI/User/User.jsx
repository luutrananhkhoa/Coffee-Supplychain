import React, { useContext, useState } from 'react'
import Button from '../../Components/Button/Button'
import ModalAddUser from '../../Components/ModalAddUser/ModalAddUser';
import ModalAddFarmer from '../../Components/ModalAddFarmer/ModalAddFarmer';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './User.scss';
import { Context } from '../../Context/Context';
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3';

const User = () => {
  const { modaAddUserIsShown,
     setModalAddUserIsShown,
     address, 
     setAddress} = useContext(Context)

  const [showModalAddFarmer, setShowModalAddFarmer] = useState(false)
 
  const onHandleConnectMetamask = async () =>{
  
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
      })
    let addressTemp = accounts[0]
  
    setAddress(addressTemp)
    console.log(address)
  }


  return (
    <div className="container">
       {modaAddUserIsShown && <ModalAddUser />}
       {showModalAddFarmer && <ModalAddFarmer setShowModalAddFarmer={setShowModalAddFarmer}/>}
        <Sidebar />
        <div className="content">
            <h1>Users</h1>
            <div className="buttonContainer">
                <div className="buttonLine"><Button title="Create" /></div>
            </div>
            <div className="buttonContainer">
                <div className="buttonLine"><button type="submit" onClick={onHandleConnectMetamask}>Connect Metamask</button></div>
            </div>
            <div className="buttonContainer">
                <div className="buttonLine"><button type="submit" onClick={()=>{setShowModalAddFarmer(true)}}>Add Farmer</button></div>
            </div>
        </div>
    </div>
  )
}

export default User 