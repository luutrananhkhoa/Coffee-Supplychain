import React, { useContext } from 'react'
import './ModalAddUser.scss'
import { Context } from '../../Context/Context';
import closeIcon from '../../Assets/Images/Icon/Close.svg'
import Button from '../Button/Button';
import {getContract as getContractFarmer} from "../../Contract/farmerContract"

const ModalAddUser = () => {
    const { modaAddUserIsShown, 
        setModalAddUserIsShown, 
        modaAddBatchIsShown, 
        setModalAddBatchIsShown,
        address, 
        setAddress} = useContext(Context)

    const hideModalHandler = () => {
        setModalAddUserIsShown(false)
        setModalAddBatchIsShown(false)
    }

    const onHandleAddUser =  () =>{
        getContractFarmer().then((contractFarmer)=>{
            contractFarmer.methods.addInspector(0).send({
                from: address
            }).then((res)=>{console.log(res);})
            .catch((err)=>{console.log(err);})
            
        }).catch((err)=>{console.log(err);})
    }
  return (
    <div className="backdrop">
        <div className="modal">
            <div className="closeButtonContainer"> 
                <div onClick={hideModalHandler} ><img src={closeIcon} alt="" /></div>
            </div>
            <div className="modalContent">
                <h1 className="titleModal">Add user</h1>
                <div className="formContainer">
                    <div className="inputContainer">
                        <label for="username">Username</label>
                        <input type="text" name="username"/>
                    </div>
                    <div className="inputContainer">
                        <label for="password">Password</label>
                        <input type="password" name="password"/>
                    </div>
                </div>
                <div className="buttonContainerModal">
                    <div className="buttonLine"><button type="submit" onClick={onHandleAddUser}>Create</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalAddUser