import React from "react";

function Success({ resetForm }) {
  return (
    <div className="card success-card">
      <div className="success-icon-wrapper">
        <svg
          className="success-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="success-svg-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="success-svg-check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>

      <h2>Submission Successful!</h2>
      <p className="card-subtitle">
        Thank you for submitting your details. Your information has been successfully saved.
      </p>

      <button className="reset-btn" onClick={resetForm}>
        Submit Another Form
      </button>
    </div>
  );
}

export default Success;
