import React, { useContext } from 'react';
import './ButtonLogin.scss'
import { Context } from '../../Context/Context';
const ButtonLogin = (props) => {

    return ( 
        <>
            <button type="submit">{props.title}</button>
        </>
     );
}
 
export default ButtonLogin;