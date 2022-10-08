import React, { useContext } from 'react'
import './ModalAddFarmer.scss'
import { Context } from '../../Context/Context';
import closeIcon from '../../Assets/Images/Icon/Close.svg'
import Button from '../Button/Button';
import {getContract as getContractFarmer} from "../../Contract/farmerContract"
import { useFormik } from 'formik';
import * as Yup from 'yup'

const ModalAddFarmer = (props) => {
    const { modaAddUserIsShown, 
        setModalAddUserIsShown, 
        modaAddBatchIsShown, 
        setModalAddBatchIsShown,
        address, 
        setAddress} = useContext(Context)

    const {setShowModalAddFarmer} = props

    const formik = useFormik({
        initialValues: {
            farmerIdentifyId: "",
            farmerName: "",
            farmerPhone: "",
            famrerAddress: "",
            category: ""
        },
        validationSchema: Yup.object({
            farmerIdentifyId: Yup.string('Require string').required('Required*'),
            farmerName: Yup.string('Require string').required('Required*'),
            farmerPhone: Yup.string('Require string').required('Required*'),
            famrerAddress: Yup.string('Require string').required('Required*'),
            category: Yup.string('Require string').required('Required*'),

        }),
        onSubmit: async (values)=>{
            console.log(values)
            getContractFarmer().then((contractFarmer)=>{
                contractFarmer.methods.addFarmer(
                    parseInt(values.farmerIdentifyId),
                    values.farmerName,
                    parseInt(values.farmerPhone),
                    parseInt(values.famrerAddress),
                    parseInt(values.category),
                
                ).send({
                    from: address
                }).then((res)=>{console.log(res);})
                .catch((err)=>{console.log(err);})
                
            }).catch((err)=>{console.log(err);})
            setShowModalAddFarmer(false)
        }
    })
          

    const onHandleAddFarmer =  () =>{
        // getContractFarmer().then((contractFarmer)=>{
        //     contractFarmer.methods.addInspector(0).send({
        //         from: address
        //     }).then((res)=>{console.log(res);})
        //     .catch((err)=>{console.log(err);})
            
        // }).catch((err)=>{console.log(err);})
    }
  return (
    <div className="backdrop">
        <div className="modal">
            <div className="closeButtonContainer"> 
                <div onClick={()=>{setShowModalAddFarmer(false)}} ><img src={closeIcon} alt="" /></div>
            </div>
            <div className="modalContent">
                <h1 className="titleModal">Add farmer</h1>
                <div className="formContainer">
                    <div className="inputContainer">
                        <label for="farmerIdentifyId">FarmerIdentifyId</label>
                        <input type="text" name="farmerIdentifyId" value={formik.values.farmerIdentifyId} 
                        onChange={formik.handleChange}/>
                        <p className="commonRequireText">{formik.errors.farmerIdentifyId}</p>
                    </div>
                    <div className="inputContainer">
                        <label for="farmerName">FarmerName</label>
                        <input type="text" name="farmerName"
                        value={formik.values.farmerName} 
                        onChange={formik.handleChange}/>
                        <p className="commonRequireText">{formik.errors.farmerName}</p>
                    </div>
                    <div className="inputContainer">
                        <label for="farmerPhone">FarmerPhone</label>
                        <input type="text" name="farmerPhone"
                           value={formik.values.farmerPhone} 
                           onChange={formik.handleChange}/>
                        <p className="commonRequireText">{formik.errors.farmerPhone}</p>
                    </div>
                    <div className="inputContainer">
                        <label for="famrerAddress">FamrerAddress</label>
                        <input type="text" name="famrerAddress"
                           value={formik.values.famrerAddress} 
                           onChange={formik.handleChange}/>
                        <p className="commonRequireText">{formik.errors.famrerAddress}</p>
                    </div>  
                    <div className="inputContainer">
                        <label for="category">Category</label>
                        <input type="text" name="category"
                           value={formik.values.category} 
                           onChange={formik.handleChange}/>
                        <p className="commonRequireText">{formik.errors.category}</p>
                    </div>  
                </div>
                <div className="buttonContainerModal">
                    <div className="buttonLine"><button type="submit" onClick={formik.handleSubmit}>Create</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalAddFarmer