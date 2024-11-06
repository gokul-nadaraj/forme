

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import image1 from '/images/image21.png';
import logo from '/images/multibook.png'

import image2 from '/images/image22.png';
import image3 from '/images/image23.png';

import './Banner.css';

const Banner = () => {
  const images = [image1, image2, image3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const [fade, setFade] = useState(false); // State to manage fade effect

  // Function to go to the previous image
  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false);
    }, 300); // Adjust the timeout to match the transition duration
  };
  // Function to go to the next image
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 300); // Adjust the timeout to match the transition duration
  }
  const initialFormData = { name: '', email: '', phone: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Basic validation: check if the input is empty
    setErrors({
      ...errors,
      [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required.` : ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === '') {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      alert('Payment submitted successfully!');
      
      // Reset form data and errors to refresh the form
      setFormData(initialFormData);
      setErrors({ name: '', email: '', phone: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };


  return (
    
    <div className='container'>
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
    <div className="form-container">
      <h2 className="form-heading">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <p className="error-message">{errors.name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <p className="error-message">{errors.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
          <p className="error-message">{errors.phone}</p>
        </div>
        <button type="submit" className="submit-button">
          BUY NOW
        </button>
      </form>
      <div className='pay'>
        <p>Guaranteed safe & secure payment</p>

      </div>
      <div className='box-container'>
      <div className='box1'><img src="" alt="" /></div>
      <div className='box2'><img src="" alt="" /></div>
      <div className='box3'><img src="" alt="" /></div>
      <div className='box4'><img src="" alt="" /></div>
      <div className='box5'><img src="" alt="" /></div>
      </div>
    </div>
</div>

  );
};

export default Banner;













