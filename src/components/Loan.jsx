// Loan.js

import React, { useState } from 'react';
import '../styles/Loan.css'; // Create Loan.css for styling

function Loan() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    loanAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
;
    // Add logic to handle the form submission, such as sending data to a server
    console.log('Form submitted:', formData);
    alert('Loan application submitted!');
  };

  return (
    <div className="loan-container">
      <h1>Loan Application</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="text"
          id="loanAmount"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Loan;
