import React from "react";

import "./footer.scss";

const Footer = ({ current, pages }) => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p className="copyright">&copy; 2023 copyright by M 1 L K Y</p>
          <div className="page-counter">
            <span className="current-page">{current}</span>
            <span className="divider"></span>
            <span className="total-pages">{pages}</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
