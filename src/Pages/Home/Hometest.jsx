import { Carousel } from "antd";
import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import NavbarLanding from "../../Components/Navbar_landing";
import "./Home.scss";
import Aos from "aos";
import { ColumnContainer } from "../../Components/ResponsiveConts";
import Typewriter from "typewriter-effect";

import Linkedin from "../../Assets/icons/linkedin0.svg";
import Instagram from "../../Assets/icons/instagram.svg";
import HomeSect2 from "./Sect2";
import HomeSect3 from "./HomeSect3";
import HomeSect5 from "./HomeSect5";
import HomeSect6 from "./HomeSect6";
import HomeSect7 from "./HomeSect7";
import HomeSect4 from "./HomeSect4";

const Hometest = () => {
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#553c3c",
    lineHeight: "160px",
    textAlign: "center",
    minWidth: "100%",
    width: "100%",
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const SideSocials = [
    {
      img: `${Linkedin}`,
      link: "https://www.linkedin.com/company/poaadit",
      alt: "twitter",
      width: "22px",
    },
    {
      img: `${Instagram}`,
      link: "https://www.instagram.com/poaaditlimited/",
      alt: "inst",
      width: "20px",
    },
    
  ];

  return (
    <div className="homecont">
      <NavbarLanding />
      <Carousel autoplay className="carousel" autoplaySpeed={5000}>
    <div>
          <div className="carousel_div0" style={contentStyle}>
            <h1 className="company_name">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("POA ADIT @ 16")

                    .callFunction(() => {
                     console.log("String typed out!");
                     }) 
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Celebrating 16 years of Excellence")
                    .pauseFor(2000)
                    .deleteChars(10)
                    .typeString("Innovation")
                    .pauseFor(2000)
                    .deleteChars(10)
                    .typeString("Integrity")
                    .pauseFor(2000)
                    .deleteChars(9)
                    .typeString("Efficiency")
                    .pauseFor(2000)
                    .deleteChars(10)
                    .typeString("Precision")
                    .pauseFor(2000)
                    .deleteChars(9)
                    .typeString("Empathy")
                    .pauseFor(2000)
                    .start();
                }}
                options={{
                  cursor: "",
                  loop: true,
                }}
              />
           </h1>
           {/*<h4 className="company_name"> Quality Workmanship with attention to detail</h4>*/}
          </div>
        </div>
        {/*<div>
          <div className="carousel_div1" style={contentStyle}>
            <h1>Innovation</h1>
            <h4>Innovative Solutions for your Building Needs</h4>
          </div>
        </div>
        <div>
          <div className="carousel_div2" style={contentStyle}>
            <h1>Excellence</h1>
            <h4>The Ultimate Construction Experience</h4>
          </div>
        </div>*/}
      </Carousel>

      <div className="homemain">
        <ColumnContainer id="home_main_cont">
          <div className="side_socials">
            {SideSocials.map((i) => (
              <a href={i.link}>
                <img src={i.img} alt={i.alt} width={i.width} />
              </a >
            ))}
          </div>
        </ColumnContainer>
      </div>

      <HomeSect2 />
      <HomeSect3 />
      <HomeSect4 />
      <HomeSect5 />
      <HomeSect6 />
      <HomeSect7 />
      <Footer />
    </div>
  );
};

export default Hometest;
