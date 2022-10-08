import React, { useContext, useRef } from 'react'
import './ModalAddBatch.scss'
import { Context } from '../../Context/Context';
import closeIcon from '../../Assets/Images/Icon/Close.svg'
import Button from '../Button/Button';
import {getContract as getContractFarmer} from "../../Contract/farmerContract"

const ModalAddPlant = () => {
  const { modaAddBatchIsShown, setModalAddBatchIsShown,  modaAddUserIsShown, setModalAddUserIsShown} = useContext(Context)
  
  const batchNameInputRef = useRef();

  const hideModalHandler = () => {
    setModalAddBatchIsShown(false)
    setModalAddUserIsShown(false)
  }

  const handleSubmitAddBatch = () =>{

    const enterBatchName = batchNameInputRef.current.value;
    console.log('enterBatchName', enterBatchName)
  }

  return (
    <div className="backdrop">
        <div className="modal">
        <form onSubmit={handleSubmitAddBatch}>
            <div className="closeButtonContainer"> 
                <div onClick={hideModalHandler} ><img src={closeIcon} alt="" /></div>
            </div>
            <div className="modalContent">
              <h1 className="titleModal">Add batch</h1>
              <div className="formContainer">

                  <div className="inputContainer">
                      <label htmlFor="name_batch">Batch name</label>
                      <input type="text" name="name_batch" ref={batchNameInputRef}/>
                    </div>
                    <div className="inputContainerWithFlex">
                      <div className="inputContainer">
                        <label htmlFor="type">Type coffee</label>
                        <input type="text" name="type"/>
                      </div>
                      <div className="inputContainer">
                        <label htmlFor="humus">Humus</label>
                        <input type="text" name="humus"/>
                      </div>
                    </div>
                    <div className="inputContainerWithFlex">
                      <div className="inputContainer">
                        <label htmlFor="fertilizer">Fertilizer</label>
                        <input type="text" name="fertilizer"/>
                      </div>
                      <div className="inputContainer">
                        <label htmlFor="partner">Partner</label>
                        <input type="text" name="partner"/>
                      </div>
                    </div>
                    <div className="inputContainerWithFlex">
                      <div className="inputContainer">
                        <label htmlFor="coffee_bean">Coffee bean</label>
                        <input type="text" name="coffee_bean"/>
                      </div>
                      <div className="inputContainer">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="inputTypeDate" name="date"/>
                      </div>
                    </div>

              </div>
            </div>
            <div className="buttonContainerModal">
              <div className="buttonLine"><Button title="OK" /></div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default ModalAddPlant