import React, { useState } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import AboutForm from "../components/Account/AboutForm";
import AccountForm from "../components/Account/AccountForm";
import AddressForm from "../components/Account/AddressForm";

export default function AccountPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [validation, setValidation] = useState(false);

  const onChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setFormData(prev => ({ ...prev, [name]: files && files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const next = () => {
    setValidation(true);
    // simple required check for step 1
    if (step === 1) {
      if (!formData.firstName || !formData.email) return;
    }
    if (step === 2) {
      if (!formData.username || !formData.password) return;
      if (formData.password !== formData.confirmPassword) return;
    }
    setValidation(false);
    setStep(s => s + 1);
  };

  const prev = () => setStep(s => Math.max(1, s-1));

  const finish = () => {
    alert("Profile completed! (data stored in console)");
    console.log("Profile data:", formData);
  };

  return (
    <Card>
      <Card.Body>
        <h4>Build Your Profile</h4>
        <ProgressBar now={step === 1 ? 33 : step === 2 ? 67 : 100} className="mb-3" />
        {step === 1 && <AboutForm formData={formData} onChange={onChange} validation={validation} />}
        {step === 2 && <AccountForm formData={formData} onChange={onChange} validation={validation} />}
        {step === 3 && <AddressForm formData={formData} onChange={onChange} validation={validation} />}

        <div className="mt-3 d-flex justify-content-between">
          <Button variant="secondary" disabled={step===1} onClick={prev}>Previous</Button>
          {step < 3 ? <Button onClick={next}>Next</Button> : <Button variant="success" onClick={finish}>Finish</Button>}
        </div>
      </Card.Body>
    </Card>
  );
}
