import React, { useEffect } from "react";
import { ColumnContainer } from "../../Components/ResponsiveConts";
import Aos from "aos";

const HomeSect4 = () => {
    
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  return (
    <div className="homesect4cont">
      <ColumnContainer id="sect4cont">
        <div className="homesect4" data-aos="fade-up">
         <span><h2 className="somefacts">Some Facts <br/> About Us</h2></span>
         <span><h2>16+</h2><h4>Years of Experience</h4></span>
         <span><h2>19</h2><h4>Delivered Projects</h4></span>
         <span><h2>10</h2><h4>Locations</h4></span>
         <span><h2>5B+</h2><h4>Value of Projects</h4></span>

        </div>
        <span className="poa_mask">
          POA ADIT
        </span>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect4;
