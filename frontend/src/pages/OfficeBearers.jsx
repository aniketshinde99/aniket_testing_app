import React from "react";
import "../assets/styles/OfficeBearers.css"
import officeImg from "../assets/Office_Bearers.png";

const OfficeBearers = () => {
  return (
    <>
      {/* Full-width image outside the container */}
      <div className="office-image-wrapper">
        <img
          src={officeImg}
          alt="Office Bearers"
          className="office-image-full"
        />
      </div>

      {/* Content section starts here */}
      <div className="president-container">
        <h2 className="section-title">Office Bearers</h2>

        <div className="president-card">
          <h3 style={{ textAlign: "center", marginBottom: "0" }}>
            PERA Office Bearers
          </h3>
        </div>
      </div>
    </>
  );
};

export default OfficeBearers;
