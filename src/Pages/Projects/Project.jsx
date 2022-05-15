import React from "react";
import AppLayoutLayer from "../../Components/AppLayoutLayer";
import "./Project.scss"
import ProjSect from "./ProjSect";


const Project = () => {
  return (
    <div className="homecont">
      <AppLayoutLayer>
        <ProjSect/>
      </AppLayoutLayer>
    </div>
  );
};

export default Project;
