import "./portfolio.scss";
import React from "react";
import Moment from "moment";
import projects from "../config/projects";

const Portfolio = () => {
  return (
    <div className="main-section portfolio-section">
      <h1>Portfolio</h1>
      <p>
        See my works below. Unless explicitly stated otherwise, all their
        back-end and front-end parts were <strong>completely done by me</strong>
        .
      </p>
      <div className="timeline portfolio-timeline">
        <ul>
          {projects.map((project, i) => {
            return (
              <li
                className="timeline_element timeline_element--now project"
                key={i}
              >
                <div className="timeline_element-date">
                  <time className="timeline_element-date-text">
                    {Moment(project.start).format("MMM YYYY")} -{" "}
                    {project.end === ""
                      ? "PRESENT"
                      : Moment(project.end).format("MMM YYYY")}
                  </time>
                  <small>{project.company}</small>
                </div>
                <div className="timeline_element-contents">
                  <div className="project-text">
                    <a href="/portfolio" className="project-link">
                      <div className="project-title">{project.title}</div>
                      <div className="project-subtitle">{project.role}</div>
                    </a>
                    <div className="project-desc">
                      <p>
                        <strong>{project.desc}</strong>
                      </p>
                      <ul>
                        {/* {project.responsibilities.map((responsibility, i) => {
                          return <li key={i}>{responsibility}</li>;
                        })} */}
                        {project.features.map((feature, i) => {
                          return <li key={i}>{feature}</li>;
                        })}
                      </ul>
                    </div>
                    <a href="/portfolio" className="button primary">
                      More Details
                    </a>
                    <div className="project-tech-stack">
                      <h6 className="tech-title">Technologies</h6>
                      <ul className="tech-tags">
                        {project.techStack.split(",").map((tag, i) => {
                          return (
                            <li key={i}>
                              <a href="/" className="button secondary">
                                {tag}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  {project.image ? (
                    <div className="project-image">
                      <img src={project.image} alt="project" />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
