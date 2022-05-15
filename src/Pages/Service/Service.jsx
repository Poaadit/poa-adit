import React from "react";
import AppLayoutLayer from "../../Components/AppLayoutLayer";
import "./Service.scss"
import ServSect1 from "./ServSect1";
import ServSect2 from "./ServSect2";


const Service = () => {
  return (
    <div className="homecont">
      <AppLayoutLayer>
        <ServSect1/>
        <ServSect2/>
      </AppLayoutLayer>
    </div>
  );
};

export default Service;
