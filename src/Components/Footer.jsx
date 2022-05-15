import React from "react";
import { ColumnContainer } from "./ResponsiveConts";
import "./Styles/Footer.scss";

import Locatio1 from "../Assets/icons/location1.svg";
import Telephone from "../Assets/icons/telephone.svg";
import Instagram from "../Assets/icons/instagramL.svg";

import Linkedin from "../Assets/icons/linkedinW.svg";
import { MailOutlined} from "@ant-design/icons/lib/icons";

const Footer = () => {
  const SideSocials = [
    {
      img: `${Linkedin}`,
      alt: "fcbook",
      width: "20px",
      link:"https://www.linkedin.com/company/poaadit"
    },
    {
      img: `${Instagram}`,
      alt: "inst",
      width: "17px",
      link:"https://www.instagram.com/poaaditlimited/"
    },
  ];

  return (
    <div className="footer">
      <div className="details_banner_cont">
        <ColumnContainer id="details_banner">
          <div className="contacts">
            {" "}
            <li>
            <img src={Telephone} alt="tel-icon" width="16x" />
              <a href="tel:+234 812 7139 390">+234 812 7139 390</a>
            </li>
            <li>
            <img src={Locatio1} alt="loc-icon" width="16x" />
              <a
                href="https://goo.gl/maps/FYRDjCkXRmizHzYS9"
                target="_blank"
                rel="noopener noreferrer"
              >
                14b Muri Okunola Street, Victoria Island, Lagos.
              </a>
            </li>
            <li>
              <MailOutlined />
              <a  href="mailto:info@poaadit.com">info@poaadit.com</a>
            </li>
            <div className="nav_socials">
              {SideSocials.map((i) => (
                <a href={i.link}>
                  <img src={i.img} alt={i.alt} width={i.width} />
                </a>
              ))}
            </div>
          </div>
          <li className="copyright">©POA Adit 2022</li>
        </ColumnContainer>
      </div>
    </div>
  );
};

export default Footer;
