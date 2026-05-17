import React from 'react'
import './BreadCrums.css';
import arrow_icon from "../../assets/arrow_icon.png"

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className='breadcrums'>
      Home <img src= {arrow_icon} alt='' height='10px'/> 
      SHOP <img src={arrow_icon} alt="" height="10px"/>
      {product.category ? product.category : ""}
      <img src={arrow_icon} alt="" height="10px"/>
      {product.name ? product.name : ""}
      
    </div>
  )
}

export default Breadcrums;
