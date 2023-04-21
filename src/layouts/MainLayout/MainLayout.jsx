import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

import "./mainLayout.scss";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="main-container">
          <div className="wrapper-content">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
