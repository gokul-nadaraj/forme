import React from 'react'
import logo from '/images/bookcover_a.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'; // Regular email icon


import './Footer.css'
import {faLocationPin, faPhone} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer' id="Contact">

<div className="footer-content" >
    <div className="footer-content-one">

        <img src={logo}alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio quos, tenetur voluptatem aliquam in libero natus odio nesciunt at!</p>



    </div>


<div className="footer-content-right">

    <h2>Contact Information</h2>
<ul>
    <li>
        <FontAwesomeIcon icon ={faLocationPin}/>
        Street</li>
    <li>
    <FontAwesomeIcon icon ={faPhone}/>
        6379138492</li>
    <li> 
       
    <FontAwesomeIcon icon={faEnvelopeRegular} />
        Iamgokul03062001@gmail.com</li>
    
</ul>
</div>

</div>

<p className='footer-copyright'>
Copyrights © 2024 TinyKarts. All Rights Reserved. 
</p>
    </div>
  )
}

export default Footer