import "./main.scss";
import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="main-inner">
        <div className="home-section">
          <div className="home-section-inner">
            <div className="home-heading">Hi, I'm Dan,</div>
            <h2 className="home-subheading">
              a <strong>front-end</strong> focused software engineer with{" "}
              <strong>full stack</strong> experience.
            </h2>
            <div className="home-buttons">
              <a className="button primary">Portfolio</a>
              <br></br>
              <a className="button primary">My offer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
