import "./leftnav.scss";

import React from "react";

const LeftNav = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <a className="my">
          <div className="my-avatar">
            <img src={"/assets/images/dan.jpg"} width="170" height="170" />
          </div>
          <div className="my-content">
            <h1 className="my-name">Xiaoxu Zhou</h1>
            <h2 className="my-title">Full-Stack Software Engineer</h2>
          </div>
        </a>
        <nav className="block main-nav">
          <div className="navigation-extendable">
            <ul>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>My Offer</a>
              </li>
              <li>
                <a>My CV</a>
              </li>
              <li>
                <a>Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="block block-social">
          <div className="block-title">Get in touch</div>
          <div className="block-content">
            <div className="social-icons">
              <a href="mailto:zhouxxu1985@gmail.com">
                <i className="fa fa-envelope-square"></i>
              </a>
              <a href="tel:+0210768411">
                <i className="fa fa-phone-square"></i>
              </a>
              <a href="https://github.com/sd6245908" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/xiaoxuzhou/" target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default LeftNav;
