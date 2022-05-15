import React from "react";
import { Link } from "react-router-dom";
import { Button1, ColumnContainer } from "../../Components/ResponsiveConts";
import "./Home.scss";

const HomeSect3 = () => {
  return (
    <div className="homesect3cont">
      <ColumnContainer id="sect3cont">
        <div className="homesect3">
          <div className="innovative">
            <h1 className="build_red">Our Services</h1>
            <p>
              POA ADIT has a pool of construction equipments, transitional,
              human, material and technology resources. It is the assurance in
              itself.
            </p>{" "}
            <p>
              POA ADIT is capable of assuming total project responsibility with
              a comprehensive project delivery program which includes design,
              engineering, construction management, materials management,
              logistics and site support services.
            </p>
            <p>
              We are focused and excellence driven with the aim of surpassing
              our performance everytime. 
            </p>
            <Button1 id="servicebtn">
              <Link to="our-services">Learn More</Link>
            </Button1>
          </div>
          <div className="worker_pics_cont">
            <div className="worker_pics0"></div>
            <div className="worker_pics1"></div>
          </div>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect3;
