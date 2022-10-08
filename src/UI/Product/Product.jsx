import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Product.scss'
import axios from 'axios'
import { useEffect } from 'react'

const Product = () => {
  const [product,setProduct] = useState();
  useEffect(()=>{
    async function getData(){
      const res= await axios.get("http://localhost:4000/test/gettest/1");
      return res;
    }

    getData().then((res)=>setProduct(res));
    getData().catch((err)=>console.log(err));
  },[])

  console.log('product', product)
  return (
    <div className="container">
        <Sidebar />
        <div className="content">
          <h1>Product</h1>
          <div class="commonProductContainer">
              <div class="commonProductItem">
                <h6>Name</h6>

              </div>
          </div>
        </div>
    </div>
  )
}

export default Product