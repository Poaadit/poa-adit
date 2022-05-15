import React from "react";
import { Link } from "react-router-dom";
import {  Button1, ColumnContainer } from "../../Components/ResponsiveConts";
import "./Home.scss";
const HomeSect7 = () => {
  return (
    <div className="homesect7cont">
      <ColumnContainer id="sect7cont">
        <div className="homesect7">
            <div>
              <h1>Your Trusted</h1>
              <h1 id="trust_red">Construction Partner</h1>
              <h4>We are committed to superior and quality results.</h4>
            </div>
            <Link to ="/contact-us">
            <Button1 id="contcbtn">Contact Us</Button1>

            </Link>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect7;
          