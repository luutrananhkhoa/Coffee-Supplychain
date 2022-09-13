import React, { useContext, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.scss';
import Button from './../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import user_icon from '../../Assets/Images/Icon/card_user.svg'
import batch_icon from '../../Assets/Images/Icon/card_batch.svg'
import role_icon from '../../Assets/Images/Icon/card_role.svg'
import ModalAddBatch from '../../Components/ModalAddBatch/ModalAddBatch';
import { Context } from '../../Context/Context';
const Home = () => {

    const { modaAddBatchIsShown, setModalAddBatchIsShown} = useContext(Context)
    console.log(modaAddBatchIsShown)

    const showModalHandler = () => {
        setModalAddBatchIsShown(true)
    }

    const hideModalHandler = () => {
        setModalAddBatchIsShown(false)
    }

    return ( 
        <div className="container">
            {modaAddBatchIsShown && <ModalAddBatch />}
            <Sidebar />
            <div className="dashboard">
                <h1>Dashboard</h1>
                <div className="buttonContainer">
                    <div className="buttonLine"><Button title="Add Batch" /></div>
                </div>
                <div className="dashboard_card">
                    <div className="dashboard_card_item"><Card title="USERS" quantity="3" img={user_icon} /></div>
                    <div className="dashboard_card_item"><Card title="TOTAL ROLES" quantity="5" img={role_icon}/></div>
                    <div className="dashboard_card_item"><Card title="TOTAL BATCHES" quantity="5" img={batch_icon}/></div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;