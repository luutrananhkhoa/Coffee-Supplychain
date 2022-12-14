import React, { useContext } from 'react';
import './Button.scss'
import { Context } from '../../Context/Context';
const Button = (props) => {
    const { modaAddBatchIsShown, setModalAddBatchIsShown, modaAddUserIsShown, setModalAddUserIsShown} = useContext(Context)

    const showModalHandler = () => {
        setModalAddBatchIsShown(true)
        setModalAddUserIsShown(true)
    }

    return ( 
        <>
            <button type="submit" onClick={showModalHandler}>{props.title}</button>
        </>
     );
}
 
export default Button;