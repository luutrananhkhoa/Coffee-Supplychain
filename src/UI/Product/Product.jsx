import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Product.scss'
import axios from 'axios'
import { useEffect } from 'react'

const Product = () => {
  useEffect(()=>{
    async function getData(){
      const res= await axios.get("http://localhost:4000/test/gettest/1");
      return res;
    }

    getData().then((res)=>console.log(res));
    getData().catch((err)=>console.log(err));
  })

  return (
    <div className="container">
        <Sidebar />
        <div className="content">
                <h1>Product</h1>

            </div>
    </div>
  )
}

export default Product