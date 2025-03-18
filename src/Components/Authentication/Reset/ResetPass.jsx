import React from "react";

import "./ResetPass.css";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return (
    <>
      <div className="resetPasswordSection">
        <h2>Reset Your Password</h2>
        <div className="resetPasswordContainer">
          <p>We will send you an email to reset your password</p>
          <form>
            <input type="email" placeholder="Email address *" required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>
          Back to{" "}
          <Link to="/loginSignUp">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ResetPass;
