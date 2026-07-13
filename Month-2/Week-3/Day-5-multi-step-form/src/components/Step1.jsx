import { useState } from "react";

function Step1({ nextStep, formData, handleChange }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="card">
      <h2>Personal Information</h2>
      <p className="card-subtitle">Please enter your name and email address</p>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. John Doe"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. john@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="buttons">
        {/* Spacer to push Next button to the right */}
        <div></div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Step1;
