import { Carousel } from "antd";
import React from "react";
import { ColumnContainer } from "../../Components/ResponsiveConts";
import { StarFilled } from "@ant-design/icons";
import "./Home.scss";
import "../Projects/Project.scss";

const HomeSect5 = () => {
  return (
    <div className="homesect5cont">
      <ColumnContainer id="sect5cont">
        <div className="homesect5">
          <h1>What Our Clients Have To Say</h1>
          <span>
            {" "}
            <StarFilled className="starr" />
            <StarFilled className="starr" />
            <StarFilled className="starr" />
            <StarFilled className="starr" />
            <StarFilled className="starr" />
          </span>
          <Carousel autoplay className="review_carousel">
            <div className="review">
              <span>
                <p>
                  Poa Adit has and will always be our goto construction company.
                  We have been immensely impressed by their outstanding
                  performance in delivering quality buildings within our strict
                  timelines.
                </p>
              </span>
              <h4>Helen Mbakwe</h4>
              <h5>C.E.O, Rosagold Max Solutions</h5>
            </div>
            <div className="review">
              <span>
                <p>
                  This is a company I can trust without flinching. I’m glad to
                  have them in my corner.
                </p>
              </span>
              <h4>Daniel Adebayo</h4>
              <h5>Real Estate Consultant</h5>
            </div>
            <div className="review">
              <span>
                <p>
                  I have been working with Poa Adit for the past 6 years and I
                  have had absolutely no reason to complain. They are simply
                  excellent at everything they do.
                </p>
              </span>
              <h4>Tobi Omonayin</h4>
              <h5>Real Estate Surveyor</h5>
            </div>
          </Carousel>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default HomeSect5;
