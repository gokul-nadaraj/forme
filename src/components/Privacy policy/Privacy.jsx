import React, { useState } from 'react';
import './Privacy.css'; // Assuming the CSS file for styling

const Privacy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTerms = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="privacy-container">
      <div className='privacy-btn'>
        <button className="privacy-button" onClick={toggleTerms}>
          Privacy Policy
        </button>
      </div>

      <div className={`privacy-content ${isOpen ? 'open' : ''}`}>
        <p>
          At Tinykarts (YesurajSeelan), we value your privacy and are committed to protecting your personal information. When you purchase an eBook from our site, we collect details such as your name, email, address, and payment information solely for processing transactions, delivering your order, and improving our services. We do not store sensitive payment data, and all transactions are securely processed through trusted third-party payment gateways like Razorpay. Your data is retained only as long as necessary and will not be shared without your consent, except for legal or service-related reasons. For any concerns, contact us at yesuraj88@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
