import React from 'react'
import Button from '../../Components/Button/Button'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './User.scss';
const User = () => {
  return (
    <div className="container">
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