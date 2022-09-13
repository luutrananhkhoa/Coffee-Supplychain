import React from "react";
import './Error.scss'
import logo from "../../Assets/Images/LogoCoffeeChain.png"
const Error = () => {
    return ( 
        <div className="error_container">
            <div className="error_content">
                <img src={logo} alt="" />
                <h1>Not Found 404</h1>
            </div>
        </div>
     );
}
 
export default Error;