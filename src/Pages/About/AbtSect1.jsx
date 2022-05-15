import React from "react";
import { ColumnContainer,CoreValueCard } from "../../Components/ResponsiveConts";
import Aboutpic from "../../Assets/images/Aboutt.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
//icons
import PrecisionIcon from "../../Assets/icons/Precision.png";
import EfficiencyIcon from "../../Assets/icons/efficiency.png";
import ExcellenceIcon from "../../Assets/icons/excellence.png";
import InovationIcon from "../../Assets/icons/innovation.png";
import IntegrityIcon from "../../Assets/icons/integrity.png";
import EmpathyIcon from "../../Assets/icons/empathy.png"

const AbtSect1 = () => {
  return (
    <div>
      <div className="abtsect1cont">
        <ColumnContainer id="abtmaincont">
          <div className="design_cont">
            <div className="design_left">
              <h1>Design, Construction</h1>
              <h1 className="h1_red"> and Consultancy</h1>
              <p>
                 POA Adit Nigeria Limited is a full service construction company
                offering building solutions from start to finish. Having been in
                business for more than a decade, we have provided and proffered
                innovative solutions to a range of wonderful clients. From
                contract delivery alternatives to progressive reconstruction and
                tech-driven construction services,  POA Adit offers clients
                flexible options that keep information flowing, teammates
                collaborating, and projects on track. Since inception, the
                company has increasingly been involved in broad-based
                construction services. We have built a team of highly
                experienced Professionals and Technicians with reputable skills
                using the very modern tools and equipment. We are a team of
                professional with proven track record that has the ability to
                successfully transform plan into reality and we have continued
                to perfect these over the years.
              </p>
              <h3>Adeyemi Adiatu</h3>
            </div>
            <div className="image_cont">
              <LazyLoadImage
                src={Aboutpic}
                alt="team pic"
                effect="blur"
              />
            </div>
          </div>
        </ColumnContainer>
      </div>

      <div className="mission_main_cont">
        <ColumnContainer id="mission_cont">
          <div>
            <h1>Mission</h1>
            <p>
            To creatively leverage our capabilities in construction while promoting safe and healthy environment.
            </p>
          </div>
          <div>
            <h1>Vision</h1>
            <p>
              To be a niche enterprise construction company driven by excellence
              with commitment to the built environment.
            </p>
          </div>
        </ColumnContainer>
      </div>
      <div className="values_main_cont">
        <ColumnContainer id="values_cont">
          <div>
            <h1>Our Core Values</h1>
            <div className="core_values">
              {CoreValues.map((value)=>(
                <CoreValueCard card_body={value.body} card_title={value.title} image_src={value.svg}/>
              ))}
            </div>
          </div>
        </ColumnContainer>
      </div>

    </div>
  );
};
const CoreValues=[
  {
    svg:`${PrecisionIcon}`,
    title:"Precision",
    body:"Zero tolerance for error",
  },
  {
    svg:`${InovationIcon}`,
    title:"Innovation",
    body:"A professional team with continuous improvement mindset",
  },
  {
    svg:`${IntegrityIcon}`,
    title:"Integrity",
    body:"Delivery with exceptional moral principles ",
  },
  {
    svg:`${ExcellenceIcon}`,
    title:"Excellence",
    body:"A journey in exceptional construction delivery",
  },
  {
    svg:`${EfficiencyIcon}`,
    title:"Efficiency",
    body:"Achieving maximum results with minimum wastage ",
  },
  {
    svg:`${EmpathyIcon}`,
    title:"Empathy",
    body:" We walk and feel the paths with you",
  }
]

export default AbtSect1;
