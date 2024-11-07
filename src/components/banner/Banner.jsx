import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import image1 from '/images/image21.png';
import image2 from '/images/image22.png';
import image3 from '/images/image23.png';
import logo from '/images/multibook.png';
import './Banner.css';

const Banner = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false); // Track if the screen width is less than 992px

  const [showForm, setShowForm] = useState(false); // Track if the form is shown on mobile


  // Slide navigation handlers
  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  // Form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
    }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });
    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      await paymentHandler();
    }
  };

  const handleBuyNowClick = () => {
    setShowForm(!showForm); // Toggle form visibility
    if (!showForm) {
      document.body.classList.add('show-overlay'); // Add overlay class to body
    } else {
      document.body.classList.remove('show-overlay'); // Remove overlay class when form is hidden
    }
  };
  
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkWidth(); // Check width on initial load
    window.addEventListener('resize', checkWidth); // Add listener for window resize

    return () => {
      window.removeEventListener('resize', checkWidth); // Cleanup the listener on component unmount
    };
  }, []);

  // Payment handler
  const paymentHandler = async () => {
    try {
      const orderbody = { amount: 1000, currency: 'INR', receipt: 'receiptId_1' };
      const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'nb7yqBXPNZ8RDEsa0s7sS8OxEn9bujNV1c1VK3vc',
      };
      const response = await axios.post("https://178sjvr7ai.execute-api.ap-south-1.amazonaws.com/order", orderbody, { headers });
      const order = response.data;

      const options = {
        key: '',
        amount: orderbody.amount,
        currency: orderbody.currency,
        name: "Your Business Name",
        order_id: order.id,
        handler: async (response) => {
          await axios.post("https://178sjvr7ai.execute-api.ap-south-1.amazonaws.com/order/validate", response, { headers });
          alert("Payment successful!");
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: "#3399cc" },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="container">
      <div
      className={`banner ${fade ? 'fade' : ''}`}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className='banner-container'>
        <FontAwesomeIcon icon={faArrowLeft} className='btn' onClick={handlePrevious} />
        <img src={logo} alt="open" />
      </div>
      <div className='shop-container'>
        <div className='shop'>
          <h2>Hot & Trendy</h2>
          <h1>Baby Kids Cloth</h1>
          <p>Get up to 30% off on Your First Order</p>
          <button>Shop Now</button>
        </div>
        <div className='btn-container'>
                
          <FontAwesomeIcon icon={faArrowRight} onClick={handleNext}    className='btn'/>
                               
               </div>
                          
      </div>
    </div>

{/* Mobile */}
  <div className="form-container">
        <h2 className="form-heading">Payment Form</h2>
        {isMobile && (
  <button onClick={handleBuyNowClick} className="buy-now-toggle">
    {showForm ? 'Hide Payment Form' : 'Show Payment Form'}
  </button>
)}

<div className={`form-container ${showForm ? 'show-form' : ''}`}>
 

  {isMobile && showForm && (
  <div className="overlay"></div> // This is the overlay that will cover the rest of the page
)}

{isMobile && showForm && (
  <div className="form-container show-form">
    <h2 className="form-heading">Payment Form</h2>
    <form onSubmit={handleSubmit}>
      {['name', 'email', 'phone'].map((field) => (
        <div key={field} className="form-class">
          <label htmlFor={field} className="form-label">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            className="form-input"
          />
          <p className="error-message">{errors[field]}</p>
        </div>
      ))}
      <button type="submit" className="submit-button">BUY NOW</button>
    </form>
  </div>
)}

{/* desktop */}
{!isMobile && (
  <form onSubmit={handleSubmit} className="form-container1">
    <div className="form-left">
      {['name', 'email', 'phone'].map((field) => (
        <div key={field} className="form-group">
          <label htmlFor={field} className="form-label">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            className="form-input"
          />
          <p className="error-message">{errors[field]}</p>
        </div>
      ))}
      <button type="submit" className="submit-button">BUY NOW</button>
    </div>

    <div className="form-right">
      <div className="box-container">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`box${i}`}>
            <img src="" alt={`Payment Option ${i}`} />
          </div>
        ))}
      </div>
    </div>
  </form>
)}

        
       
        {isMobile && (
        <button onClick={handleBuyNowClick} className="buy-now-toggle">
          {showForm ? 'Hide Payment Form' : 'Show Payment Form'}
        </button>
      )}
      </div>
    </div>
    </div>
  );
};

export default Banner;
