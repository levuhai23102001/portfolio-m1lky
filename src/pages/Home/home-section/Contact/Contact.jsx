import React, { useRef, useState } from "react";
import { EarthCanvas } from "../../../../components/Canvas";
import SectionWrapper from "../../../../layouts/components/Section";

import "./contact.scss";

const Contact = (props) => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <SectionWrapper
        className={`contact-section ${props.isActive ? "active" : ""}`}
      >
        <div className="contact-container">
          <div className="contact-content-left">
            <div className="contact-header">
              <p className="contact-subtitle">Get in touch</p>
              <h3 className="contact-title">Contact Me.</h3>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <label className="contact-form__label">
                <span className="contact-form__label--text">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="contact-form__label--field"
                />
              </label>
              <label className="contact-form__label">
                <span className="contact-form__label--text">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="contact-form__label--field"
                />
              </label>
              <label className="contact-form__label">
                <span className="contact-form__label--text">Your Message</span>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="contact-form__label--field"
                />
              </label>
              <button className="btn btn-submit" type="submit">
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
          <div className="contact-content-right">
            <EarthCanvas />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
