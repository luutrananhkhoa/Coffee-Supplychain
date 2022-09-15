import React, { useContext } from 'react'
import './ModalAddUser.scss'
import { Context } from '../../Context/Context';
import closeIcon from '../../Assets/Images/Icon/Close.svg'
import Button from '../Button/Button';

const ModalAddUser = () => {
    const { modaAddUserIsShown, setModalAddUserIsShown,  modaAddBatchIsShown, setModalAddBatchIsShown} = useContext(Context)

    const hideModalHandler = () => {
        setModalAddUserIsShown(false)
        setModalAddBatchIsShown(false)
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
                    <div className="buttonLine"><Button title="Create" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalAddUser