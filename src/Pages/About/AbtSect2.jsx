import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button2, ColumnContainer } from "../../Components/ResponsiveConts";
import "./About.scss";
import { Modal1, Modal2, Modal3, Modal4 } from "./Modals"; const AbtSect2 = () => {
  const [modal1Visible, setmodal1Visible] = useState(false);
  const [modal2Visible, setmodal2Visible] = useState(false);
  const [modal3Visible, setmodal3Visible] = useState(false);
  const [modal4Visible, setmodal4Visible] = useState(false);

  const Team = [
    {
      name: "Adeyemi Adiatu",
      rank: "C.E.O",
      more: <h6 onClick={() => setmodal1Visible(true)}>Read More</h6>,
    },
    {
      name: "Bode Gbolade",
      rank: "Managing Director",
      more: <h6 onClick={() => setmodal2Visible(true)}>Read More</h6>,
      paragraph:
        "He is an astute professional with over twenty-three (23) years cognate experience in the built environment. He holds a B-Tech and M-Tech in Architecture from the Federal Univeristy of Technology, Akure, Ondo State, Nigeria. He is a fellow of the Nigeria Institute of Architects (NIA) and a member of Architects Registration Council of Nigeria (ARCON). Bode is an International associate of American Institute of Architects (AIA) and also a fellow of the International professional Managers Association, Uk. He is an astute human resource manager, with focus on optimization, corporate transformation and corporate management.",
    },
    {
      name: "Dolapo Akinwale",
      rank: "Strategy & Business Development",
      more: <h6 onClick={() => setmodal3Visible(true)}>Read More</h6>,
      paragraph:
        "Mr Akinwale holds a First Class Honors Bachelors degree in Computer Engineering from Convenant Univeristy, Nigeria. He further obtained a Masters Degree in Human Resource (Service) Management- University of Buckingham, United Kingdom. He is a member of the International Institute of Business Analysis, (IIBA). He worked in Onet Telecommunications located in Oyo State and Airtel Nigeria. He has experience in Human Resource Management, Service Marketing. and Organisational Strategy.",
    },
    {
      name: "Olaleye Adeyinka",
      rank: "Chief Financial Officer",
      more: <h6 onClick={() => setmodal4Visible(true)}>Read More</h6>,
      paragraph:
        "Mr Akinwale holds a First Class Honors Bachelors degree in Computer Engineering from Convenant Univeristy, Nigeria. He further obtained a Masters Degree in Human Resource (Service) Management- University of Buckingham, United Kingdom. He is a member of the International Institute of Business Analysis, (IIBA). He worked in Onet Telecommunications located in Oyo State and Airtel Nigeria. He has experience in Human Resource Management, Service Marketing. and Organisational Strategy.",
    },
  ];

  return (
    <div className="abtsect2cont">
      <ColumnContainer id="team_banner_cont">
        <div className="team_banner">
          <h1>The Team</h1>
          <div className="team_cont">
            {Team.map((member) => (
              <>
                <div className="team">
                  <div className="black_mask"></div>
                  <div className="member">
                    <div className="member_details">
                      <h3>{member.name}</h3>
                      <h5>{member.rank}</h5>
                      {member.more}
                    </div>
                  </div>
                </div>

                <div className="member_mobile">
                  <h3>{member.name}</h3>
                  <h5>{member.rank}</h5>
                  {member.more}
                </div>
              </>
            ))}
          </div>

          <p style={{ marginTop: "60px" }}>
            Do you have a drive for excellent performance in the <br />{" "}
            construction industry?
          </p>
          <Link to="/contact-us" >
            <Button2 id="join_btn">Join Us</Button2>
          </Link>

          <>
            <Modal1 visible={modal1Visible} setVisible={setmodal1Visible} />
            <Modal2 visible={modal2Visible} setVisible={setmodal2Visible} />
            <Modal4 visible={modal3Visible} setVisible={setmodal3Visible} />
            <Modal5 visible={modal4Visible} setVisible={setmodal4Visible} />
          </>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default AbtSect2;
