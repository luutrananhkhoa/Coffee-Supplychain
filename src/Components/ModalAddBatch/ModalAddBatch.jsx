import React, { useContext, useRef } from 'react'
import './ModalAddBatch.scss'
import { Context } from '../../Context/Context';
import closeIcon from '../../Assets/Images/Icon/Close.svg'
import Button from '../Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {getContract as getContractFarmer} from "../../Contract/farmerContract"
import { useSelector } from 'react-redux';

const ModalAddBatch = (props) => {
  const { modaAddBatchIsShown, setModalAddBatchIsShown,  modaAddUserIsShown, setModalAddUserIsShown,address} = useContext(Context)
  const login = useSelector((state) => state.login);
  console.log('login', login.address)
  const batchNameInputRef = useRef();

  const {setShowModalAddPlant} = props

  const hideModalHandler = () => {
    setShowModalAddPlant(false)
    //setModalAddUserIsShown(false)
  }

  const handleSubmitAddBatch = () =>{
    const enterBatchName = batchNameInputRef.current.value;
    console.log('enterBatchName', enterBatchName)
  }
  const formik = useFormik({
    initialValues: {
        farmerId: "",
        category: "",
        testTime: "",
        area: "",
        production: ""
    },
    validationSchema: Yup.object({
      farmerId: Yup.string('Require string').required('Required*'),
      category: Yup.string('Require string').required('Required*'),
      testTime: Yup.string('Require string').required('Required*'),
      area: Yup.string('Require string').required('Required*'),
      production: Yup.string('Require string').required('Required*'),

    }),
    onSubmit: async (values)=>{
        console.log(values)
        getContractFarmer().then((contractFarmer)=>{
            contractFarmer.methods.addPlant(
                parseInt(values.farmerId),
                values.category,
                parseInt(values.testTime),
                parseInt(values.area),
                parseInt(values.production),
            
            ).send({
                from: login.address
            }).then((res)=>{console.log(res);}).then(()=>{setShowModalAddPlant(false)})
            .catch((err)=>{console.log(err);})
            
        }).catch((err)=>{console.log(err);})

    }
})
      
  return (
    <div className="backdrop">
        <div className="modal">
        <form onSubmit={handleSubmitAddBatch}>
            <div className="closeButtonContainer"> 
                <div onClick={hideModalHandler} ><img src={closeIcon} alt="" /></div>
            </div>
            <div className="modalContent">
              <h1 className="titleModal">Add plant</h1>
              <div className="formContainer">

                  {/* <div className="inputContainer">
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
                  </div> */}
                  <div className="inputContainer">
                    <label htmlFor="farmerId">farmerId</label>
                    <input type="text" name="farmerId" 
                    value={formik.values.farmerId} 
                    onChange={formik.handleChange}/>
                      <p className="commonRequireText">{formik.errors.farmerId}</p>
                  </div>
                  <div className="inputContainerWithFlex">
                    <div className="inputContainer">
                      <label htmlFor="category">category</label>
                      <input type="text" name="category"
                      value={formik.values.category} 
                      onChange={formik.handleChange}/>
                    </div>
                    <div className="inputContainer">
                      <label htmlFor="testTime">testTime</label>
                      <input type="text" name="testTime"
                      value={formik.values.testTime} 
                      onChange={formik.handleChange}/>
                    </div>
                  </div>
                  <div className="inputContainerWithFlex">
                    <div className="inputContainer">
                      <label htmlFor="area">area</label>
                      <input type="text" name="area"
                      value={formik.values.area} 
                      onChange={formik.handleChange}/>
                    </div>
                    <div className="inputContainer">
                      <label htmlFor="production">production</label>
                      <input type="text" name="production"
                      value={formik.values.production} 
                      onChange={formik.handleChange}/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="buttonContainerModal">
              <div className="buttonLine"><button type="submit" onClick={formik.handleSubmit}>Create</button></div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default ModalAddBatch