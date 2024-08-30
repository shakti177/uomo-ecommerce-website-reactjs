import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="errorContainer">
        <h1>OOPS!</h1>
        <h3>Page not found</h3>
        <p>
          Sorry, we couldn't find the page you where looking for. We suggest
          that you <br />
          return to home page.
        </p>
        <Link to="/">Go Back</Link>
      </div>
    </>
  );
};

export default Error;
