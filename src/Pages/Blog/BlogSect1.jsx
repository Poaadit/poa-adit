import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import ServiceImg from "../../Assets/images/servicesImg.jpeg";
import {
  Button2,
  ColumnContainer,
  ConsultancyIcon,
  Crane,
  Design,
  Engineering,
  Excavator,
  RealEstate,
  TextAndImageCont,
  Tool,
  WaterDroplets,
} from "../../Components/ResponsiveConts";
const ServiceImages = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="services_sect1_cont">
      <></>
      <div className="service_card card0">
        <div data-aos="fade-up" className="cardtext">
          <ConsultancyIcon />
          <span>
            <h3>Consultancy</h3>
            <p>
              We provide guidance and advice on a project, define the project
              with perfect clarification and adequately analyze factors so that
              the structure finally constructed is durable, sustainable,
              functional and safe.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card1">
        <div data-aos="fade-up" className="cardtext">
          <Tool />
          <span>
            <h3>Solutions Design</h3>
            <p>
              POA Adit Nigeria Limited is well aligned with the process of
              innovative design, creative solutions to projects and preparation
              of instructions allowing the solution to be constructed in
              consideration of all requirement with the assistance of appointed
              professionals who make up our design team.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card2">
        <div data-aos="fade-up" className="cardtext">
          <Excavator />
          <span>
            <h3>Construction</h3>
            <p>
              From planning to site preparation and down to procurement, POA
              ADIT offers clients flexible options to progressive reconstruction
              and tech-driven construction services.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card3">
        <div data-aos="fade-up" className="cardtext">
          <Crane />
          <span>
            <h3>Renovation</h3>
            <p>
              We refurbish defective buildings through planning, engineering,
              structural repair, rebuilding and finishing with the presence of
              exquisite professionals.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card4">
        <div data-aos="fade-up" className="cardtext">
          <Design />
          <span>
            <h3>Project Management</h3>
            <p>
              We plan, organize and control the performance and execution of our
              activities to ensure a maximum level of quality, timely delivery
              within budget and notable standards.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card5">
        <div data-aos="fade-up" className="cardtext">
          <Engineering />
          <span>
            <h3>Value Engineering</h3>
            <p>
              We help with the modification of designs, identify and eliminate
              unwanted costs, analyze the functions of equipment, facilities and
              methods without sacrificing functionality and quality.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card8">
        <div data-aos="fade-up" className="cardtext">
          <Crane />
          <span>
            <h3>Environmental Impact Assessment</h3>
            <p>
              We have a team of experts ready to evaluate the likely
              environmental impacts of your proposed project or development,
              taking into account inter-related socio-economic, cultural and
              human-health impacts, both beneficial and adverse.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card6">
        <div data-aos="fade-up" className="cardtext">
          <WaterDroplets />
          <span>
            <h3>Waterways Engineering</h3>
            <p>
              Constuction and management of ferry terminals and associated
              development offering a range of services that covers designing,
              consultinf, channelization of waterways, construction and
              mangement of projects within the value chain.
            </p>
          </span>
        </div>
      </div>
      <div className="service_card card7">
        <div data-aos="fade-up" className="cardtext">
          <RealEstate />
          <span>
            <h3>Real Estate</h3>
            <p>
              We are a team of professional realtors you can rely on. We are
              synonymous with innovative developments and unparalled luxury
              apartments, residents, homes and commercial outlets to serve our
              growing clients.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

const ServSect1 = () => {
  return (
    <div className="servicesectcont">
      <ColumnContainer id="servicesect1cont">
        <div className="servicesect1">
          <TextAndImageCont image_src={ServiceImg}>
          <h1>Our Services</h1>
          <p>
            POA ADIT has a pool of construction equipments, transitional, human,
            material and technology resources. It is the assurance in itself.
            POA ADIT is capable of assuming total project responsibility with a
            comprehensive project delivery program which includes design,
            engineering, construction management, materials management,
            logistics and site support services.
          </p>
          <p>
            {" "}
            We are focused and excellence driven with the aim of surpassing our
            performance everytime. We understand the dynamic nature and
            technicalities of our industry vis-a-vis the demand of clients.
          </p>
          <p>
            {" "}
            We understand the terrain/topography and climatic conditions in the
            country and the bias it creates. We have learned the work with the
            ambiance of nature to achieve the best.
          </p>
          <p>
            {" "}
            Contact POA Adit Nigeria Limited today and we’ll make your building
            project become a masterpiece.
          </p>
          </TextAndImageCont>
        </div>
        <ServiceImages />
        <Link to="/projects" className="projects_link">
          <Button2 id="project_btn">View Our Projects</Button2>
        </Link>
      </ColumnContainer>
    </div>
  );
};

export default ServSect1;
