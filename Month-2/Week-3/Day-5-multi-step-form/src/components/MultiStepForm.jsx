import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from "./Success";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    agree: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const resetForm = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      agree: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Render correct step component
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 4:
        return <Success resetForm={resetForm} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      {/* Progress Stepper (Only show for Steps 1, 2, 3) */}
      {step <= 3 && (
        <div className="stepper">
          <div className={`step-item ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
            <div className="step-number">{step > 1 ? "✓" : "1"}</div>
            <div className="step-label">Personal Info</div>
          </div>
          <div className="step-divider text-divider"></div>
          <div className={`step-item ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
            <div className="step-number">{step > 2 ? "✓" : "2"}</div>
            <div className="step-label">Contact Details</div>
          </div>
          <div className="step-divider text-divider"></div>
          <div className={`step-item ${step >= 3 ? "active" : ""} ${step > 3 ? "completed" : ""}`}>
            <div className="step-number">{step > 3 ? "✓" : "3"}</div>
            <div className="step-label">Review & Submit</div>
          </div>
        </div>
      )}

      {/* Dynamic Step Component */}
      <div className="step-wrapper">{renderStep()}</div>
    </div>
  );
}

export default MultiStepForm;
