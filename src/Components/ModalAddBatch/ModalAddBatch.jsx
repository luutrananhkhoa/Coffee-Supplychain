import React, { useContext } from 'react'
import './ModalAddBatch.scss'
import { Context } from '../../Context/Context';
import closeIcon from '../../Assets/Images/Icon/Close.svg'
import Button from '../Button/Button';
const ModalAddBatch = () => {
  const { modaAddBatchIsShown, setModalAddBatchIsShown} = useContext(Context)

  const hideModalHandler = () => {
    setModalAddBatchIsShown(false)
}
  return (
    <div className="backdrop">
        <div className="modal">
            <div className="closeButtonContainer"> 
                <div onClick={hideModalHandler} ><img src={closeIcon} alt="" /></div>
            </div>
            <div className="modalContent">
              <h1 className="titleModal">Add batch</h1>
              <div className="formContainer">
                <div className="inputContainer">
                  <label for="name_batch">Batch name</label>
                  <input type="text" name="name_batch"/>
                </div>
                <div className="inputContainerWithFlex">
                  <div className="inputContainer">
                    <label for="type">Type coffee</label>
                    <input type="text" name="type"/>
                  </div>
                  <div className="inputContainer">
                    <label for="humus">Humus</label>
                    <input type="text" name="humus"/>
                  </div>
                </div>
                <div className="inputContainerWithFlex">
                  <div className="inputContainer">
                    <label for="fertilizer">Fertilizer</label>
                    <input type="text" name="fertilizer"/>
                  </div>
                  <div className="inputContainer">
                    <label for="partner">Partner</label>
                    <input type="text" name="partner"/>
                  </div>
                </div>
                <div className="inputContainerWithFlex">
                  <div className="inputContainer">
                    <label for="coffee_bean">Coffee bean</label>
                    <input type="text" name="coffee_bean"/>
                  </div>
                  <div className="inputContainer">
                    <label for="date">Date</label>
                    <input type="date" className="inputTypeDate" name="date"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonContainerModal">
              <div className="buttonLine"><Button title="OK" /></div>
            </div>
        </div>
    </div>
  )
}

export default ModalAddBatch