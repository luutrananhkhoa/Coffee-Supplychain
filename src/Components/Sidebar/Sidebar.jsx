import React from "react";
import './Sidebar.scss';
import logo from "../../Assets/Images/LogoWebCoffeeChain.png"
import iconDashboard from "../../Assets/Images/Icon/dashboard.svg"
import iconNoti from "../../Assets/Images/Icon/notification.svg"
import iconUser from "../../Assets/Images/Icon/user.svg"
import iconRequest from "../../Assets/Images/Icon/request.svg"
import iconQrcode from "../../Assets/Images/Icon/qrcode.svg"
import iconProduct from "../../Assets/Images/Icon/product.svg"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const location = useLocation().pathname;
    const locationTemp = location.replace('/', '');

    return ( 
        <>
            <div className="sidebar">
                <div className="imgSidebar"><img src={logo} alt="" /></div>
                <ul className="listSidebar">
                    <Link to="/home" className="linkTag"><li className={`${locationTemp===""?"active":""}`}><img src={iconDashboard} alt="" />Dashboard</li></Link>
                    <Link to="/product" className="linkTag"><li className={`${locationTemp==="product"?"active":""}`}><img src={iconProduct} alt="" />Product</li></Link>
                    <li><img src={iconNoti} alt="" />Notification</li>
                    <Link to="/qrcode" className="linkTag"><li className={`${locationTemp==="qrcode"?"active":""}`}><img src={iconQrcode} alt="" />QR code</li></Link>
                    <li><img src={iconRequest} alt="" />Request</li>
                    <Link to="/user" className="linkTag"><li className={`${locationTemp==="user"?"active":""}`}><img src={iconUser} alt="" />Users</li></Link>
                </ul>

                <div className="profileSidebar">
                    <div className="profileText"><p>Profile</p></div>
                    <div className="logOutView">
                        <Link to='/login' className="logOutText">Log out</Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Sidebar;