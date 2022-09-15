import React from 'react'
import Button from '../../Components/Button/Button'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './QRCode';

const QRCode = () => {
  return (
    <div className="container">
            <Sidebar />
            <div className="content">
                <h1>QR Code</h1>
                <div className="buttonContainer">
                    <div className="buttonLine"><Button title="Upload QR Code" /></div>
                </div>
            </div>
            
        </div>
  )
}

export default QRCode