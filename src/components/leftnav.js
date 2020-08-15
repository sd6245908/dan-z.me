import "./leftnav.scss";

import React, { useState, useEffect } from "react";

const routes = [
  { title: "Portfolio", path: "/portfolio" },
  { title: "My Offer", path: "/offer" },
  { title: "My CV", path: "/cv" },
  { title: "Contact Me", path: "/contact" }
];

const LeftNav = () => {
  let path = window.location.pathname;

  useEffect(() => {
    let page = path.replace(/\//g, "");
    document.body.classList.add(page === "" ? "home" : page);
  });

  const [open, setOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <a className="my" href="/">
          <div className="my-avatar">
            <img
              src={"/assets/images/Dan.jpg"}
              width="170"
              height="170"
              alt="Dan's Avatar"
            />
          </div>
          <div className="my-content">
            <h1 className="my-name">Xiaoxu Zhou</h1>
            <h2 className="my-title">Full-Stack Software Engineer</h2>
          </div>
        </a>
        <nav className={`block main-nav ${open ? "extended" : ""}`}>
          {/* <Router> */}
          <div className="navigation-extend-bar">
            <div className="social-icons">
              <a href="mailto:zhouxxu1985@gmail.com">
                <i className="fa fa-envelope-square"></i>
              </a>
              <a href="tel:+0210768411">
                <i className="fa fa-phone-square"></i>
              </a>
              <a href="https://github.com/sd6245908">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/xiaoxuzhou/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
            <a
              href="javascipt:void(0)"
              className="navigation-extend-button js-extend-main-navigation"
              onClick={() => setOpen(!open)}
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className={`navigation-extendable `}>
            <ul>
              {routes.map((item, i) => {
                return (
                  <li className={path === item.path ? "current" : ""} key={i}>
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* </Router> */}
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
              <a href="https://github.com/sd6245908">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/xiaoxuzhou/">
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
