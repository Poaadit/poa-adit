import React from "react";
import AppLayoutLayer from "../../Components/AppLayoutLayer";
import "./About.scss"
import AbtSect1 from "./AbtSect1";
import AbtSect2 from "./AbtSect2";
import AbtSect3 from "./AbtSect3";


const About = () => {
  return (
    <div className="homecont">
      <AppLayoutLayer>
        <AbtSect1/>
        <AbtSect2/>
        <AbtSect3/>
      </AppLayoutLayer>
    </div>
  );
};

export default About;
