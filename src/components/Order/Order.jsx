import React from 'react'
import './Order.css'
import logo1 from '/images/bookcover_a.png'

const Order = () => {
  return (
    <>
    <div className='order'>
        <div className='order-container'>
            <h1>Lina's Birthday Surprice</h1>
            <p className='para'>A heart-Warming Childrens bedtime Story</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam maxime, facere magni tempore veritatis odio officia numquam? Totam, quia!</p>
            <button>Order Now</button>
        </div>
        <div className='book'>
<img src={logo1} alt='open book' />

        </div>
    </div>
   
    
    </>
  )
}

export default Order