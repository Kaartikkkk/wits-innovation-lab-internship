import { useState } from "react";

function Step3({ nextStep, prevStep, formData, handleChange }) {
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!formData.agree) {
      setError("You must agree to the terms and conditions before submitting.");
      return;
    }
    setError("");
    nextStep(); // Goes to success screen
  };

  return (
    <div className="card">
      <h2>Review & Submit</h2>
      <p className="card-subtitle">Please double check your details before submitting</p>

      <div className="review-container">
        <div className="review-item">
          <span className="review-label">Full Name</span>
          <span className="review-value">{formData.name}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Email Address</span>
          <span className="review-value">{formData.email}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Age</span>
          <span className="review-value">{formData.age} years old</span>
        </div>
        <div className="review-item">
          <span className="review-label">Phone Number</span>
          <span className="review-value">{formData.phone}</span>
        </div>
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span className="checkbox-text">
            I confirm that all the details provided above are correct.
          </span>
        </label>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit} className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default Step3;
