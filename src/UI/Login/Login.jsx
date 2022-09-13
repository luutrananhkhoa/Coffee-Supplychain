import React from "react";
import "./Login.scss";
import logo from "../../Assets/Images/LogoWebCoffeeChain.png"
import bigLogo from "../../Assets/Images/LogoNoTitle.png"
import Input from './../../Components/Input/Input';
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <>
            <div className="container">
                <div className="rightSide">
                
                    <div className="imgContainerRight">
                        <img src={bigLogo} alt="Logo" />
                    </div>
                </div>
                <div className="leftSide">
                    <div className="imgContainer">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="textContainer"><h1>LOG IN</h1></div>
                    <div className="inputContainer">
                        <div className="inputItem">
                            <label for="username">Username</label>
                            <Input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="inputItem">
                            <label for="password">Password</label>
                            <Input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="buttonItem">
                        <Button title="Log In"/>
                    </div>
                    <div className="textCenter">
                        <h6><Link to="/" className="textLink">Forgot password</Link></h6>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;