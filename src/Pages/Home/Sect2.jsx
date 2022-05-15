import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import {
  Button1,
  ColumnContainer,
  Crane,
  Excavator,
  Tool,
} from "../../Components/ResponsiveConts";
import "./Home.scss";
const HomeSect2 = () => {
  const ProjectCards = [
    {
      icon: <Excavator />,
      text: "Renovation &",
      text1: "Construction",
      text2: "",
    },
    {
      icon: <Tool />,
      text: "Solutions",
      text1: "Design",
      text2: "",
    },
    {
      icon: <Crane />,
      text: "Engineering",
      text1: "Consultancy &",
      text2: "Design",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="homesect2">
      <ColumnContainer id="home_sct2_cont">
        <div className="futureof">
          <h1>About Us </h1>
          <p data-aos="fade-up">
            POA ADIT Nigeria Limited is a limited liability company formally
            registered in Nigeria with the Corporate Affairs Commission, a niche
            enterprise construction company, driven by excellence with
            commitment to the built environment, offering real estate services,
            design and construction, marine services, project Management as well
            as Strategic advisory and consultancy services to individuals,
            corporate bodies, Government and parastatals. </p>
          <Button1 id="aboutbtn">
            <Link to="about-us">Learn More</Link>
          </Button1>

          <span>Future</span>
        </div>
        <div className="projects">
          <div>
            {ProjectCards.map((card) => (
              <div className="project_card">
                <span>
                  {card.icon}
                  <h4>
                    {card.text}
                    <br />
                    {card.text1}
                    <br />
                    {card.text2}
                  </h4>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect2;
