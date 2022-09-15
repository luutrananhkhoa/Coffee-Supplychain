import React from 'react'
import './Card.scss'
import user_icon from '../../Assets/Images/Icon/card_user.svg'
import batch_icon from '../../Assets/Images/Icon/card_batch.svg'
import role_icon from '../../Assets/Images/Icon/card_role.svg'

const Card = (props) => {
  return (
    <div className="card">
        <div className="card_title"><h1>{props.title}</h1></div>
        <div className="card_content">
            <div className="card_img"><img src={props.img} alt="Icon" /></div>
            <div className="card_quantity"><h2>{props.quantity}</h2></div>
        </div>
    </div>
  )
}

export default Card