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
import qrcode_img from '../../Assets/Images/Icon/Qr_code_img.svg';
import iconComplete from '../../Assets/Images/Icon/icon_complete.svg';
import iconIncomplete from '../../Assets/Images/Icon/icon_incomplete.svg';
import iconWaiting from '../../Assets/Images/Icon/icon_waiting.svg';
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
                <h2>BATCHES OVERVIEW</h2>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>QR Code</th>
                                <th>Farm Inspector</th>
                                <th>Harvester</th>
                                <th>Importer</th>
                                <th>Processor</th>
                                <th>Exporter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={qrcode_img} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconWaiting} alt="" /></td>
                                <td><img src={iconIncomplete} alt="" /></td>
                            </tr>
                            <tr>
                                <td><img src={qrcode_img} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconWaiting} alt="" /></td>
                                <td><img src={iconIncomplete} alt="" /></td>
                            </tr>
                            <tr>
                                <td><img src={qrcode_img} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconComplete} alt="" /></td>
                                <td><img src={iconWaiting} alt="" /></td>
                                <td><img src={iconIncomplete} alt="" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;