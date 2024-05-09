import React from 'react'
import './Offers.css'
import Ex from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Sellers</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={Ex} alt="" />
        </div>
    </div>
  )
}

export default Offers