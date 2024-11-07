import React, { useState, useEffect } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false); // Track if the screen width is less than 992px
  const [showForm, setShowForm] = useState(false); // Track if the form is shown on mobile

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBuyNowClick = () => {
    if (isMobile) {
      setShowForm(!showForm); // Toggle the form visibility on mobile devices
    }
  };

  return (
    <div className={`form-container ${showForm ? 'show-form' : ''}`}>
      <h2 className="form-heading">Payment Form</h2>
      
      {/* Only show the form on mobile when BUY NOW is clicked */}
      {isMobile && showForm && (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}

      {/* For desktop, always show the form */}
      {!isMobile && (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}

      <div className="pay"><p>Guaranteed safe & secure payment</p></div>
      <div className="box-container">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`box${i}`}><img src="" alt="" /></div>
        ))}
      </div>

      {isMobile && (
        <button onClick={handleBuyNowClick} className="buy-now-toggle">
          {showForm ? 'Hide Payment Form' : 'Show Payment Form'}
        </button>
      )}
    </div>
  );
};

export default PaymentForm;
