import React from 'react';
import './Input.scss';

const Input = (props) => {
    return ( 
        <>
            <input type={props.type}
             name={props.name} 
             value={props.value}
             placeholder={props.placeholder}/>
        </>
     );
}
 
export default Input;