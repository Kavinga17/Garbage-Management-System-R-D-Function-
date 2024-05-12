import React, { useState, useEffect } from 'react';

const Payments = () => {
  const [formData, setFormData] = useState({
    Card_Number: '',
    Amount: '',
    Expiration_Month: '',
    Expiration_Year: '',
    CVN: ''
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [backgroundImage, setBackgroundImage] = useState('');
  const [updateId, setUpdateId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Payment Form */}
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <div className="bg-white rounded-lg shadow-lg p-6" style={{ backgroundColor: '#cce6cc' }}>
          <h2 className="text-center text-2xl font-bold mb-4">Payment Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Card Number */}
            <div className="mb-4">
              <label htmlFor="Card_Number" className="block text-sm font-medium">Card Number</label>
              <input
                type="text"
                id="Card_Number"
                name="Card_Number"
                value={formData.Card_Number}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Card_Number && 'border-red-500'}`}
                required
              />
              {validationErrors.Card_Number && <p className="text-red-500">{validationErrors.Card_Number}</p>}
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label htmlFor="Amount" className="block text-sm font-medium">Amount</label>
              <input
                type="text"
                id="Amount"
                name="Amount"
                value={formData.Amount}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Amount && 'border-red-500'}`}
                placeholder="Enter amount..."
                required
              />
              {validationErrors.Amount && <p className="text-red-500">{validationErrors.Amount}</p>}
            </div>

            {/* Expiration Month */}
            <div className="mb-4">
              <label htmlFor="Expiration_Month" className="block text-sm font-medium">Expiration Month</label>
              <input
                type="text"
                id="Expiration_Month"
                name="Expiration_Month"
                value={formData.Expiration_Month}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Expiration_Month && 'border-red-500'}`}
                placeholder="Enter expiration month..."
                required
              />
              {validationErrors.Expiration_Month && <p className="text-red-500">{validationErrors.Expiration_Month}</p>}
            </div>

            {/* Expiration Year */}
            <div className="mb-4">
              <label htmlFor="Expiration_Year" className="block text-sm font-medium">Expiration Year</label>
              <input
                type="text"
                id="Expiration_Year"
                name="Expiration_Year"
                value={formData.Expiration_Year}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Expiration_Year && 'border-red-500'}`}
                placeholder="Enter expiration year..."
                required
              />
              {validationErrors.Expiration_Year && <p className="text-red-500">{validationErrors.Expiration_Year}</p>}
            </div>

            {/* CVN */}
            <div className="mb-4">
              <label htmlFor="CVN" className="block text-sm font-medium">CVN</label>
              <input
                type="text"
                id="CVN"
                name="CVN"
                value={formData.CVN}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.CVN && 'border-red-500'}`}
                placeholder="Enter CVN..."
                required
              />
              {validationErrors.CVN && <p className="text-red-500">{validationErrors.CVN}</p>}
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button type="submit" style={{ backgroundColor: '#305830' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                {updateId ? 'Update Payment' : 'Submit Payment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payments;
