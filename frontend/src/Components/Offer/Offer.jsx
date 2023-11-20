import React from 'react'
import './Offer.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h2>Only For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='btn'>Check Now</button>
      </div>

      <div className="offer-right">
        <img src={exclusive_image} alt='...'/>
      </div>
    </div>
  )
}

export default Offer
