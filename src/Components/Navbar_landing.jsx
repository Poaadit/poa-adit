import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import "./Styles/Nav_land.scss";
import { Cross as Hamburger } from "hamburger-react";
import { RowContainer } from "./ResponsiveConts";
import { Link, NavLink } from "react-router-dom";

import Logo0 from "../Assets/images/Logo0.png";

const NavbarLanding = () => {
  const [visible, setVisible] = useState(false);

  const openDrawer = () => {
    setVisible(true);
    sethamburgerOpen(true);
  };
  const closeDrawer = () => {
    setVisible(false);
    sethamburgerOpen(false);
  };

  //clicked hamburger icon
  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  //drawer
  const NavItem = [
    {
      name: "Home",
      link: "/",
      exact: "exact",
    },
    {
      name: "About Us",
      link: "/about-us",
      exact: "",
    },
    {
      name: "Our Projects",
      link: "/projects",
      exact: "",
    },
    {
      name: "Our Services",
      link: "/our-services",
      exact: "",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      exact: "",
    },
  ];

  return (
    <>
      <div id="menuBtn">
        <Hamburger
          toggled={hamburgerOpen}
          toggle={(toggled) => {
            if (toggled) {
              openDrawer();
            } else {
              closeDrawer();
            }
          }}
          easing="ease-in"
          size="25"
          duration="0.3"
        />
      </div>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "flex-end",
          position: "absolute",
          top: "45px",
          left: "7%",
          zIndex: 2000,
        }}
      >
        <img src={Logo0} alt="logo" height="50px" width="auto" id="logoimg" />
      </Link>

      <div
        className={`navContainer ${
          visible ? "navContainerEx" : "navContainer"
        }`}
      >
        <RowContainer id="navitems">
          <ul className="nav_item_cont">
            {NavItem.map((item) => (
              <NavLink
                exact={item.exact}
                activeClassName="navitemActive"
                to={item.link}
                className="navitemDark"
              >
                <span>{item.name}</span>
                <NavLink
                  exact={item.exact}
                  activeClassName="active"
                  className="line"
                  to={item.link}
                ></NavLink>
              </NavLink>
            ))}
          </ul>
        </RowContainer>

        <Drawer title="" visible={visible} onClose={closeDrawer}>
          <Menu theme="light" mode="inline" style={{ border: "none" }}>
            <div className="drawerD">
              <div className="drawerContent">
                <div className="menuItem" style={{ marginTop: "180px" }}>
                  <Link
                    to="/"
                    onClick={() => {
                      closeDrawer();
                    }}
                  >
                    {" "}
                    HOME
                  </Link>
                  <NavLink
                    exact
                    activeClassName="activeD"
                    className="line"
                    to="/"
                  ></NavLink>
                </div>
                <div className="menuItem">
                  <Link
                    to="/about-us"
                    onClick={() => {
                      closeDrawer();
                    }}
                  >
                    {" "}
                    ABOUT US
                  </Link>
                  <NavLink
                    activeClassName="activeD"
                    className="line"
                    to="/about-us"
                  ></NavLink>
                </div>
                <div className="menuItem">
                  <Link
                    to="/projects"
                    onClick={() => {
                      closeDrawer();
                    }}
                  >
                    {" "}
                    OUR PROJECTS
                  </Link>
                  <NavLink
                    activeClassName="activeD"
                    className="line"
                    to="/projects"
                  ></NavLink>
                </div>
                <div className="menuItem">
                  <Link
                    to="/our-services"
                    onClick={() => {
                      closeDrawer();
                    }}
                  >
                    {" "}
                    OUR SERVICES
                  </Link>
                  <NavLink
                    activeClassName="activeD"
                    className="line"
                    to="/our-services"
                  ></NavLink>
                </div>
                <div className="menuItem">
                  <Link
                    to="/contact-us"
                    onClick={() => {
                      closeDrawer();
                    }}
                  >
                    {" "}
                    CONTACT US
                  </Link>
                  <NavLink
                    activeClassName="activeD"
                    className="line"
                    to="/contact-us"
                  ></NavLink>
                </div>
              </div>
            </div>
          </Menu>
        </Drawer>
      </div>
    </>
  );
};
export default NavbarLanding;
