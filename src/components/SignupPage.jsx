import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/profile");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isFormValid =
    fullName.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    isValidEmail(email) &&
    password.trim() !== "" &&
    isAgency !== "";

  return (
    <div className="signup">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="mb29">
          <legend>Full Name<span>*</span></legend>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="mb29">
          <legend>Phone Number<span>*</span></legend>
          <input
            type="number"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="mb29">
          <legend>Email Address<span>*</span></legend>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="mb29">
          <legend>Password<span>*</span></legend>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="mb18">
          <legend>Company Name</legend>
          <input
            type="text"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </fieldset>

        <p>Are you an Agency?<span>*</span></p>
        <div className="radio-group">
          <label className="custom-radio">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={isAgency === "yes"}
              onChange={(e) => setIsAgency(e.target.value)}
            />
            <span className="radio-mark"></span>
            Yes
          </label>

          <label className="custom-radio">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={isAgency === "no"}
              onChange={(e) => setIsAgency(e.target.value)}
            />
            <span className="radio-mark"></span>
            No
          </label>
        </div>
        
        <button type="submit" disabled={!isFormValid}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;