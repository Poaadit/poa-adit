import React from "react";
import "./Styles/ResponsiveConts.scss";
import tool from "../Assets/icons/tools.png";
import crane from "../Assets/icons/construction.png";
import excavator from "../Assets/icons/excavator.png";
import consultancyicon from "../Assets/icons/consultancy.png";
import design from "../Assets/icons/design.png";
import engineering from "../Assets/icons/engineering.png";
import supplychain from "../Assets/icons/supply-chain.png";
import waterdroplets from "../Assets/icons/water-droplet.png";
import realestate from "../Assets/icons/real-estate.png";

import arrow1 from "../Assets/icons/arrow1.svg";
import tick from "../Assets/icons/tick.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";

export const ColumnContainer = ({ children, id }) => {
  return (
    <div className="columnCont" id={id}>
      {children}
    </div>
  );
};

export const RowContainer = ({ children, id }) => {
  return (
    <div className="rowCont " id={id}>
      {children}
    </div>
  );
};

export const Button1 = ({ children, id, onClick }) => {
  return (
    <div className="btn_one" id={id} onClick={onClick}>
      {children}
      <img className="arrow" width="15px" src={arrow1} alt="arrow" />
    </div>
  );
};

export const Button2 = ({ children, id, onClick }) => {
  return (
    <div className="btn_two" id={id} onClick={onClick}>
      {children}
      <img className="arrow" width="10px" src={arrow1} alt="arrow" />
    </div>
  );
};

export const Button3 = ({ children, id, onClick }) => {
  return (
    <div className="btn_one" id={id} onClick={onClick}>
      {children}
    </div>
  );
};

export const Check = ({ id, onClick }) => {
  return (
    <div className="check" id={id} onClick={onClick}>
      <img className="tick" width="20px" src={tick} alt="tick" />
    </div>
  );
};

export const Tool = ({ id }) => {
  return <img src={tool} alt="tool" width="32px" />;
};

export const Crane = ({ id }) => {
  return <img src={crane} alt="crane" width="32px" />;
};

export const Excavator = ({ id }) => {
  return <img src={excavator} alt="excavator" width="32px" />;
};

export const ConsultancyIcon = ({ id }) => {
  return <img src={consultancyicon} alt="consultancy" width="32px" />;
};
export const Design = ({ id }) => {
  return <img src={design} alt="design" width="32px" />;
};
export const Supplychain = ({ id }) => {
  return <img src={supplychain} alt="supply" width="32px" />;
};
export const Engineering = ({ id }) => {
  return <img src={engineering} alt="engineer" width="32px" />;
};
export const WaterDroplets = ({ id }) => {
  return <img src={waterdroplets} alt="supply" width="32px" />;
};
export const RealEstate = ({ id }) => {
  return <img src={realestate} alt="engineer" width="32px" />;
};

export const TextAndImageCont = ({ id,className, image_src,children }) => {
  return (
    <div className="text_and_image_cont">
      <div className="text_sect">{children}</div>
      <div className="image_sect">
        <LazyLoadImage
          className="_image"
          src={image_src}
          alt="image"
          effect="blur"
        />
      </div>
    </div>
  );
};

export const CoreValueCard=({id,className,image_src,card_title,card_body})=>{

  return <div className="values_card">
    <h2>{card_title}</h2>
    <img src={image_src} alt='icon' width="60px"/>
    <p>{card_body}</p>
  </div>

}