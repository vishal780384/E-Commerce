import React from 'react'
import './Breadcrums.css'
import arrow_icons from '../Assests/breadcrum_arrow.png'


const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icons} alt='' /> SHOP <img src={arrow_icons} alt=''/> {product.category} <img src={arrow_icons} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
