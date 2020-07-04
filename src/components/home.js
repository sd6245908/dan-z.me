import "./home.scss";
import React from "react";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-section-inner">
        <div className="home-heading">Hi, I'm Dan,</div>
        <h2 className="home-subheading">
          a <strong>front-end</strong> focused software engineer with{" "}
          <strong>full stack</strong> experience.
        </h2>
        <div className="home-buttons">
          <a className="button primary" href="/portfolio">
            Portfolio
          </a>
          <br></br>
          <a className="button primary" href="/offer">
            My offer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
