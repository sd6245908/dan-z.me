import "./contact.scss";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-section main-section ">
      <h1 className="main-title">Contact Me</h1>
      <p>
        Currently, I am working for my friend's company(E-Site) and open to any
        role.
      </p>
      <dl className="dl-vertical">
        <dt>E-mail</dt>
        <dd>
          <a href="mailto:zhouxxu1985@gmail.com">
            <i className="fa fa-envelope"></i>zhouxxu1985@gmail.com
          </a>
        </dd>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
        <dt>Phone</dt>
        <dd>
          <a href="tel:+0210768411">
            <i className="fa fa-phone"></i>0210768411
          </a>
        </dd>
        <dt>Linkedin</dt>
        <dd>
          <a href="https://www.linkedin.com/in/xiaoxuzhou/">
            <i className="fa fa-linkedin"></i>xiaoxuzhou
          </a>
        </dd>
        <dt>Github</dt>
        <dd>
          <a href="https://github.com/sd6245908">
            <i className="fa fa-github"></i>sd6245908
          </a>
        </dd>
        <div className="clearboth"></div>
      </dl>
    </div>
  );
};

export default Contact;
