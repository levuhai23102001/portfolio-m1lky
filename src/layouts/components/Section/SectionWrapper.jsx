import React from "react";

const SectionWrapper = (props) => {
  return (
    <>
      <section className={`section-wrapper ${props.className}`}>
        {props.children}
      </section>
    </>
  );
};

export default SectionWrapper;
