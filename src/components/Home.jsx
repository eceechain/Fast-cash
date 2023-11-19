// Home.js
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="header">
        <h1>Fast Cash Loan App</h1>
        <p>Get quick and easy loans to meet your financial needs.</p>
      </header>

      <section className="main-section">
        <img
          className="loan-image"
          src="https://media.istockphoto.com/id/1332654385/video/businessmen-shake-hands-for-approved-loan-apps.jpg?s=640x640&k=20&c=yp_s7f8CMq69AIVwbitbztrmiaQONn1YaxS0t3ihjfs="
          alt="Loan"
        />
        <div className="cta-container">
          <h1>Apply for a Loan Today</h1>
          <p>Get the funds you need with our fast and secure loan application process.</p>
          <Link to="/loan">
          <a href="#" className="cta-button">
            Apply Now
          </a>
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
