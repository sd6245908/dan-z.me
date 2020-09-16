import "./projectdetails.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../config/projects";

const ProjectDetails = () => {
  let { projectName } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    projects.forEach((item, i) => {
      if (item.name === projectName) {
        setProject(item);
      }
    });
  });

  return (
    <div className="cv-section main-section ">
      <h1 className="main-title">{project.title} </h1>
      <div>
        {project.onlive ? (
          <a href={project.url} className="button primary">
            <i className="fa fa-external-link"></i>View Online
          </a>
        ) : (
          ""
        )}
      </div>

      <div className="project-images">
        {project.images
          ? project.images.map((image, i) => {
              return (
                <div className="image-item" key={i}>
                  <h3 className="image-title">{image.title} </h3>
                  <div className="image-wrap">
                    {image.urls ? (
                      image.urls.map((url, i) => {
                        return (
                          <img
                            style={{ width: `${url.width ? url.width : ""}` }}
                            src={url.width ? url.src : url}
                            key={i}
                            alt={`Demo page for${url.title}`}
                          />
                        );
                      })
                    ) : (
                      <img
                        src={image.url}
                        alt={`a showcase for ${project.title}`}
                      />
                    )}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ProjectDetails;
