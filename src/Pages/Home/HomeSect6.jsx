import React from "react";
import { Link } from "react-router-dom";
import { Button2, ColumnContainer } from "../../Components/ResponsiveConts";
import {  ProjectImagesHome } from "../Projects/ProjSect";
import "./Home.scss";

import logo1 from "../../Assets/images/ClientLogo/logo1.jpg"
import logo2 from "../../Assets/images/ClientLogo/logo2.jpg"
import logo3 from "../../Assets/images/ClientLogo/logo3.png"
import logo4 from "../../Assets/images/ClientLogo/logo4.jpg"
const HomeSect6 = () => {
  return (
    <div className="homesect6cont">
      <ColumnContainer id="sect6cont">
        <div className="homesect6">
            <ProjectImagesHome id="project_imgs"/>
            <div className="clients">
              <Link to="/projects">
              <Button2 id="project_btn">View More Projects</Button2>
              </Link>
              
              <h3>Some Of Our Happy Clients</h3>
              <span>
                <img src={logo1} width="auto" height="100px" alt="james_cubbit" />
                <img src={logo2} width="auto"  height="100px" alt="lasg"/>
                <img src={logo4} width="auto"  height="100px" alt="oysg" />
                <img src={logo3} width="auto"  height="100px" alt="ncdc" />
                
              </span>
            </div>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect6;
          