import React from 'react'
import './SelectRole.scss'
import closeIcon from '../../Assets/Images/Icon/Close.svg'
const SelectRole = (props) => {

  const {setShowModalChooseRole} = props

  const hideModalHandler = () => {
    setShowModalChooseRole(false)
  }
  return (
    <div className="backdrop">
        <div className="modalRole">
            <div className="closeButtonContainer"> 
                <div onClick={hideModalHandler} ><img src={closeIcon} alt="" /></div>
            </div>
            <div className="modalContent">
            <h1 className="titleModal">Choose Role</h1>
            </div>
        </div>
    </div>
  )
}

export default SelectRole