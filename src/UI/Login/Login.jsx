import React, { useContext, useState } from "react";
import "./Login.scss";
import logo from "../../Assets/Images/LogoWebCoffeeChain.png"
import bigLogo from "../../Assets/Images/LogoNoTitle.png"
import Input from './../../Components/Input/Input';
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "../../Components/ButtonLogin/ButtonLogin";
import { getContract as getContractFarmer } from "@contract/farmerContract";
import farmerInspectorLogin from "@hook/farmerInspectorLogin";
import { Context } from "../../Context/Context";

const Login = () => {
    const navigate = useNavigate();

    const {
        modaAddUserIsShown,
        setModalAddUserIsShown,
        dispatchLogin,
        loginState,
      } = useContext(Context);

    const onHandleConnectMetamask = async () => {
        const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
        });
        const address = accounts[0];
        console.log(address);
        dispatchLogin({ type: "CONNECT", address: address });
        const contractFarmer = await getContractFarmer().catch((error) => {
        console.error(error);
        });
        await farmerInspectorLogin(dispatchLogin, contractFarmer, address).catch(
        (error) => console.error(error)
        );
        
        setTimeout(() =>{
            navigate("/home")
        },1000)

    };
    return ( 
        <>
            <div className="containerLogin">
                <div className="rightSide">
                
                    <div className="imgContainerRight">
                        <img src={bigLogo} alt="Logo" />
                    </div>
                </div>
                <div className="leftSide">
                    <div className="imgContainer">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="textContainer"><h1>Welcome to BlockCoffee</h1></div>
                    <div className="buttonContainerModal">
                        <div className="buttonLineConnect">
                                <button type="submit"
                                    class="buttonConnect"
                                    onClick={onHandleConnectMetamask}
                                    >Connect to Metamask</button>
                         </div>
                    </div>
                    {/* <div className="inputContainer">
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
                        <Link to="/"><ButtonLogin title="Log In"/></Link>
                    </div>
                    <div className="textCenter">
                        <h6><Link to="/" className="textLink">Forgot password</Link></h6>
                    </div> */}
                </div>
            </div>
        </>
     );
}
 
export default Login;