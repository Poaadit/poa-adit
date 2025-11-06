import React from "react";
import { Link } from "react-router-dom";
import { Button1, ColumnContainer } from "../../Components/ResponsiveConts";
import "./Home.scss";

import Cert1 from "../../Assets/images/ISO9001.jpeg.jpg"
import Cert2 from "../../Assets/images/45001 2018-01.jpg"

const HomeSect7 = () => {
  return (
    <div className="homesect7cont">
      <ColumnContainer id="sect7cont">
        <div className="homesect7">
          {/* Main content + logo container */}
          <div className="content-logo-row">
            <div className="text-area">
              <h1>Your Trusted</h1>
              <h1 id="trust_red">Construction Partner</h1>
              <h4>We are committed to superior and quality results.</h4>
              <Link to="/contact-us">
                <Button1 id="contcbtn">Contact Us</Button1>
              </Link>
            </div>

            {/* Logos container */}
            <div className="logo-section">
              <img
                src={Cert1}
                alt="Logo 1"
                className="partner-logo"
              />
              <img
                src={Cert2}
                alt="Logo 2"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect7;
