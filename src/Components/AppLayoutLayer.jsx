import { Layout } from "antd";
import React from "react";
import PropTypes from "prop-types"

import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayoutLayer = ({ children }) => {
  return (
    <Layout>
      <Navbar />

      <div className="children">{children}</div>

      <Footer />
    </Layout>
  );
};

export default AppLayoutLayer;

//important
AppLayoutLayer.propTypes = {
  children: PropTypes.node.isRequired,
};
