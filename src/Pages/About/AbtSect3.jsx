import React from "react";
import { Link } from "react-router-dom";
import { Button1, ColumnContainer } from "../../Components/ResponsiveConts";
import "./About.scss";

const AbtSect3 = () => {
  return (
    <div className="abtsect3cont">
      <ColumnContainer id="trusted_banner_cont">
        <div className="trusted_banner">
          <h1>
            Trusted By 36 Nigerian
            <br /> States So Far
          </h1>
        </div>
        <h4>Our astounding results speak for us</h4>
        <Link to="/our-services/#sendform">
          <Button1 id="quote_btn">Get A Quote</Button1>
        </Link>
      </ColumnContainer>
    </div>
  );
};

export default AbtSect3;
