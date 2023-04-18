import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

import "./mainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="main-container">
          {/* <div className="wrapper-content">{children}</div> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};