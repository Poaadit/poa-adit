import React from "react";
import { ColumnContainer } from "../../Components/ResponsiveConts";
import "./About.scss";

const AbtSect4 = () => {
  return (
    <div className="abtsect4cont">
      <ColumnContainer id="trusted_banner_cont">
        <div className="trusted_banner">
          <h1>
            1. OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM
          </h1>
        </div>
        <p>
          At POAADIT, we are committed to ensuring the health, safety, and welfare of our workers, subcontractors, clients, and visitors.
          In compliance with ISO 45001:2018, relevant regulatory requirements, and industry best practices, we are dedicated to providing a safe and healthy working environment throughout all of our construction sites, workshops, and offices.
        </p>
        <div className="trusted_banner">
          <h1>
           2. QUALITY MANAGEMENT SYSTEM
          </h1>
        </div>
        <p>
          At POAADIT, we are committed to leveraging our capabilities in the built environment, consistently meeting client and regulatory requirements, while promoting a healthy and safe environment.
          We strive for continuous improvement in every aspect of our operations, from project planning and design to construction and handover.
          Our focus is on customer satisfaction, excellent workmanship, and safety on every project site.
          We are dedicated to maintaining a QMS that supports our strategic goals and ensures excellence in construction delivery.
        </p>
      </ColumnContainer>
    </div>
  );
};

export default AbtSect4;
