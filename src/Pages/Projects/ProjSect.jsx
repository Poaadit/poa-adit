import { Image } from "antd";
import React, { useState } from "react";
import {
  Button2,
  Check,
  ColumnContainer,
  TextAndImageCont,
} from "../../Components/ResponsiveConts";
import Gaderik0 from "../../Assets/images/Gaderik/best construction company in Nigeria.jpg";
import Gaderik1 from "../../Assets/images/Gaderik/Gaderik1.jpg";
import Gaderik3 from "../../Assets/images/Gaderik/Gaderik3.jpg";
import Gaderik4 from "../../Assets/images/Gaderik/Gaderik4.jpg";
import Gaderik2 from "../../Assets/images/Gaderik/Gaderik2.jpg";
import Gaderik5 from "../../Assets/images/Gaderik/Gaderik5.jpg";

import Jetty0 from "../../Assets/images/Jetty/best construction company in Nigeria 0.jpg";
import Jetty1 from "../../Assets/images/Jetty/jetty1.jpeg";
import Jetty2 from "../../Assets/images/Jetty/jetty2.jpg";
import Jetty3 from "../../Assets/images/Jetty/jetty3.jpg";
import Jetty4 from "../../Assets/images/Jetty/jetty4.jpg";
import Jetty5 from "../../Assets/images/Jetty/jetty5.jpg";

import Lautech0 from "../../Assets/images/Lautech/Lautech0.jpeg";
import Lautech1 from "../../Assets/images/Lautech/Lautech1.jpg";
import Lautech2 from "../../Assets/images/Lautech/Lautech2.jpg";
import Lautech3 from "../../Assets/images/Lautech/Lautech3.jpg";
import Lautech4 from "../../Assets/images/Lautech/Lautech4.jpg";
import Lautech5 from "../../Assets/images/Lautech/Lautech5.jpg";

import Florence0 from "../../Assets/images/Florence/best construction company in Nigeria 2.jpg";
import Florence1 from "../../Assets/images/Florence/Florence1.jpg";
import Florence2 from "../../Assets/images/Florence/Florence2.jpg";
import Florence3 from "../../Assets/images/Florence/Florence3.jpg";
import Florence4 from "../../Assets/images/Florence/Florence4.jpg";
import Florence5 from "../../Assets/images/Florence/Florence5.jpg";
import Florence6 from "../../Assets/images/Florence/Florence6.jpg";

import Livjetty0 from "../../Assets/images/Livjetty/best construction company in Nigeria 3.png";
import Livjetty1 from "../../Assets/images/Livjetty/Livjetty1.png";
import Livjetty2 from "../../Assets/images/Livjetty/Livjetty2.png";
import Livjetty3 from "../../Assets/images/Livjetty/Livjetty3.png";
import Livjetty4 from "../../Assets/images/Livjetty/Livjetty4.png";
import Livjetty5 from "../../Assets/images/Livjetty/Livjetty5.png";

import Saintjoseph0 from "../../Assets/images/SaintJoseph/best construction company in Nigeria 4.png";
import Saintjoseph1 from "../../Assets/images/SaintJoseph/Joseph1.png";
import Saintjoseph2 from "../../Assets/images/SaintJoseph/Joseph2.png";
import Saintjoseph3 from "../../Assets/images/SaintJoseph/Joseph3.png";
import Saintjoseph4 from "../../Assets/images/SaintJoseph/Joseph4.png";
import Saintjoseph5 from "../../Assets/images/SaintJoseph/Joseph5.png";

import Euba0 from "../../Assets/images/Euba/best construction company in Nigeria 5.jpg";
import Euba1 from "../../Assets/images/Euba/euba1.jpg";
import Euba2 from "../../Assets/images/Euba/euba2.jpg";
import Euba3 from "../../Assets/images/Euba/euba3.jpg";
import Euba4 from "../../Assets/images/Euba/euba4.jpg";
import Euba5 from "../../Assets/images/Euba/euba5.jpg";
import Euba6 from "../../Assets/images/Euba/euba6.jpg";

import KetuJetty0 from "../../Assets/images/Agboyi-ketu/agboyi-ketu-1.jpeg";
import KetuJetty1 from "../../Assets/images/Agboyi-ketu/agboyi-ketu-2.jpeg";
import KetuJetty2 from "../../Assets/images/Agboyi-ketu/agboyi-ketu-3.jpeg";
import KetuJetty3 from "../../Assets/images/Agboyi-ketu/agboyi-ketu-4.jpeg";
import KetuJetty4 from "../../Assets/images/Agboyi-ketu/agboyi-ketu-5.jpeg";

import ProjPic from "../../Assets/images/projectsImg.jpeg";

import "./Project.scss";

export const ProjectOne = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        width="100%"
        src={Jetty0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "600px" }}
        alt="best construction company in Nigeria"
      />

      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Jetty1} />
          <Image src={Jetty2} />
          <Image src={Jetty3} />
          <Image src={Jetty4} />
          <Image src={Jetty5} />
        </Image.PreviewGroup>
      </div>
      <Check id="check_btn" />
      <Button2 id="commercial_btn">Infrastructure</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Ijegun Jetty - LASG</h1>
        <h5>Lagos</h5>
      </div>
    </div>
  );
};
export const ProjectTwo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        height="100%"
        src={Gaderik0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "auto" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Gaderik1} alt="best construction company in Nigeria" />
          <Image src={Gaderik2} alt="best construction company in Nigeria" />
          <Image src={Gaderik3} alt="best construction company in Nigeria" />
          <Image src={Gaderik4} alt="best construction company in Nigeria" />
          <Image src={Gaderik5} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Commercial</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Gaderik Building</h1>
        <h5>Victoria Island, Lagos</h5>
      </div>
    </div>
  );
};

export const ProjectThree = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        height="100%"
        src={Lautech0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "auto" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Lautech1} alt="best construction company in Nigeria" />
          <Image src={Lautech2} alt="best construction company in Nigeria" />
          <Image src={Lautech3} alt="best construction company in Nigeria" />
          <Image src={Lautech4} alt="best construction company in Nigeria" />
          <Image src={Lautech5} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Educational</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Lautech</h1>
        <h5>Ogbomosho</h5>
      </div>
    </div>
  );
};
export const ProjectFour = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        src={Florence0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "600px" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Florence1} alt="best construction company in Nigeria" />
          <Image src={Florence3} alt="best construction company in Nigeria" />
          <Image src={Florence4} alt="best construction company in Nigeria" />
          <Image src={Florence5} alt="best construction company in Nigeria" />
          <Image src={Florence2} alt="best construction company in Nigeria" />
          <Image src={Florence6} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Residential</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Florence Court</h1>
        <h5>Ibadan</h5>
      </div>
    </div>
  );
};
export const ProjectFive = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        src={Livjetty0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "600px" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Livjetty1} alt="best construction company in Nigeria" />
          <Image src={Livjetty2} alt="best construction company in Nigeria" />
          <Image src={Livjetty3} alt="best construction company in Nigeria" />
          <Image src={Livjetty4} alt="best construction company in Nigeria" />
          <Image src={Livjetty5} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Infrastructure</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Liverpool Jetty</h1>
        <h5>Lagos</h5>
      </div>
    </div>
  );
};
export const ProjectSix = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        height="100%"
        src={Saintjoseph0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "auto" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Saintjoseph1} alt="best construction company in Nigeria" />
          <Image src={Saintjoseph2} alt="best construction company in Nigeria" />
          <Image src={Saintjoseph3} alt="best construction company in Nigeria" />
          <Image src={Saintjoseph4} alt="best construction company in Nigeria" />
          <Image src={Saintjoseph5} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Educational</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>St Joseph Secondary School</h1>
        <h5>Lagos</h5>
      </div>
    </div>
  );
};

export const ProjectSeven = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        height="100%"
        src={Euba0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "auto" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Euba1} alt="best construction company in Nigeria" />
          <Image src={Euba2} alt="best construction company in Nigeria" />
          <Image src={Euba3} alt="best construction company in Nigeria" />
          <Image src={Euba4} alt="best construction company in Nigeria" />
          <Image src={Euba5} alt="best construction company in Nigeria" />
          <Image src={Euba6} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Educational</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Euba Secondary School</h1>
        <h5>Lagos</h5>
      </div>
    </div>
  );
};

export const ProjectEight = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="antdimagecont">
      <Image
        preview={{ visible: false }}
        src={KetuJetty0}
        onClick={() => setVisible(true)}
        className="project_image"
        style={{ maxWidth: "100%", width: "600px" }}
        alt="best construction company in Nigeria"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={KetuJetty1} alt="best construction company in Nigeria" />
          <Image src={KetuJetty2} alt="best construction company in Nigeria" />
          <Image src={KetuJetty3} alt="best construction company in Nigeria" />
          <Image src={KetuJetty4} alt="best construction company in Nigeria" />
        </Image.PreviewGroup>
      </div>

      <Check id="check_btn" />
      <Button2 id="commercial_btn">Infrastructure</Button2>
      <div className="transp_mask" onClick={() => setVisible(true)}>
        <h1>Agboyi Ketu Jetty</h1>
        <h5>Lagos</h5>
      </div>
    </div>
  );
};

export const ProjectImages = ({ id }) => {
  return (
    <div className="projpics" id={id}>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      <ProjectFive />
      <ProjectSix />
      <ProjectSeven />
      <ProjectEight />
    </div>
  );
};

export const ProjectImagesHome = ({ id }) => {
  return (
    <div className="projpics" id={id}>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </div>
  );
};

const ProjSect = () => {
  return (
    <div className="projsectcont">
      <ColumnContainer id="projmaincont">
        <TextAndImageCont className="projtext_n_image" image_src={ProjPic}>
          <h1>Our Projects</h1>
          <p>
            From iconic buildings to educational facilities and centers of
            learning, to community infrastructures that bring people together,
            POA ADIT is building an enduring future and creating lasting value
            for its clients.
          </p>
          <p>
            {" "}
            POA ADIT has delivered projects for government, multinationals,
            industrial groups,and high net-worth individuals. Our services
            include pre-construction, design-build, general contracting, and
            construction management.
          </p>
          <p>
            {" "}
            We have successfully executed projects of all sizes and complexities
            such as office complexes; industrial buildings; commercial
            buildings, education, residential buildings, public facilities
            across all geographical areas of Nigeria.
          </p>
        </TextAndImageCont>

        <ProjectImages />
      </ColumnContainer>
    </div>
  );
};

export default ProjSect;
