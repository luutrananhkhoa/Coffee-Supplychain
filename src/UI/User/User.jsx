import React, { useContext } from 'react'
import Button from '../../Components/Button/Button'
import ModalAddUser from '../../Components/ModalAddUser/ModalAddUser';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './User.scss';
import { Context } from '../../Context/Context';

const User = () => {
  const { modaAddUserIsShown, setModalAddUserIsShown} = useContext(Context)
  return (
    <div className="container">
        {modaAddUserIsShown && <ModalAddUser />}
        <Sidebar />
        <div className="content">
            <h1>Users</h1>
            <div className="buttonContainer">
                <div className="buttonLine"><Button title="Create" /></div>
            </div>
        </div>
    </div>
  )
}

export default User 