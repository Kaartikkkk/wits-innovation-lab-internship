import { useState } from "react";

function Step2({ nextStep, prevStep, formData, handleChange }) {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (formData.age.trim() === "" || formData.phone.trim() === "") {
            setError("Please fill in all fields.");
            return;
        }

        if (isNaN(formData.age) || Number(formData.age) <= 0) {
            setError("Please enter a valid age.");
            return;
        }

        if (formData.phone.length !== 10 || isNaN(formData.phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        setError("");
        nextStep();
    };

    return (
        <div className="card">
            <h2>Contact Details</h2>
            <p className="card-subtitle">Please enter your age and phone number</p>

            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="e.g. 25"
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            {error && <p className="error">{error}</p>}

            <div className="buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Step2;