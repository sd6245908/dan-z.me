import "./portfolio.scss";
import React from "react";
import Moment from "moment";
let projects = [
  {
    title: "E-IMS",
    subtitle: "Computer Remarketing Specialist",
    role: "Full stack developer",
    company: "E-Site Ltd.",
    start: "2020-01",
    end: "",
    image: "/assets/images/esite/landing.png",
    desc:
      "E-IMS is an Inventory Management System that allows to track the IT assets, suppliers as well as purchase and sales information. It serves as:",
    features: [
      "Responsive company landing page",
      "Oauth2 Authentication",
      "IT Asset, Stock, Supplier, Transaction management"
    ],
    url: "https://dance2go.co.nz",
    techStack: "Reactjs,Nodejs,Sass,MongoDB,Expressjs,Docker",
    responsibilities: [
      "Production Environment Setup",
      "Worked on providing API endpoints with Node.js/Inversify and MongoDB.",
      "Built from scratch admin platform for managing platform's database entities and users using React/Node/Mongoose.",
      "Implemented complex UI components with React/Javascript and SCSS."
    ]
  },
  {
    title: "Vision for Humanity",
    subtitle: "",
    role: "Web developer",
    company: "Vision for Humanity",
    start: "2019-10",
    end: "2020-01",
    image: "/assets/images/vfh/landing.png",
    desc: "A typical example of company website, featuring: ",

    features: [
      "modern one-page, responsive web design",
      "custom subpages, gallery, contact form;",
      "admin panel"
    ],
    url: "http://http://vfh.org.nz/",
    techStack: "Wordpress",
    responsibilities: [
      "As the only developer, I finish this website on my own."
    ]
  },
  {
    title: "Dance2Go",
    subtitle: "Danceware for every day at every moment through every step.",
    role: "Web developer",
    company: "Dance2Go Ltd.",
    start: "2019-11",
    end: "2019-12",
    image: "/assets/images/dance2go/landing.png",
    desc:
      "Dance2Go is a E-Commerce Website that sells danceware. It serves both as:",
    features: [
      "Product Management System",
      "Customer Online Shopping",
      "Appoitment Booking System"
    ],
    url: "https://dance2go.co.nz",
    techStack: "Javascript,PHP,HTMl,CSS3,jQuery, Wordpress,Woocommerce",
    responsibilities: [
      "a SaaS platform for tour operators and activity providers, to manage their offers, customers, orders, and agents cooperation",
      "a marketplace for end-customers to book the local tours and activities while or before the travelling."
    ]
  },
  {
    title: "IBM W3 Homepage",
    subtitle: "",
    role: "Senior Application Developer",
    company: "IBM China",
    start: "2013-06",
    end: "2018-01",
    image: "/assets/images/ibmw3/Signin1-2.png",
    desc:
      'IBM w3 is a SAP(Single Page Application) providing one place with personalized access to IBM resources like "News", "Media", "E-learning", "Polls" and so on.',
    features: [
      "A SaaS platform for IBMers to read IBM news, share their status updates, upload essential files, access to e-learning resources and so on.",
      "Highly flexable and responsive Layout that can be customized by users."
    ],
    url: "https://dance2go.co.nz",
    techStack: "HTML,Javascript,BackboneJs,Grunt,Sass,NodeJs",
    responsibilities: [
      "As one of the three main developers, I am responsible for developing redesigned visual pages, integrating different features through provided APIs and customizing search results. "
    ]
  },
  {
    title: "IBM 荟专享",
    subtitle: "",
    company: "IBM China",
    start: "2018-04",
    end: "2018-05",
    image: "",
    desc: 'IBM "荟专享" is built on Wechat Mini Progrom Platform',
    features: [],
    url: "https://dance2go.co.nz",
    techStack: "Java,Jersey,DB2,Restful API",
    responsibilities: []
  },
  {
    title: "Bulk Utility Tool",
    subtitle: "",
    company: "British Telecommunication",
    start: "2019-11",
    end: "2019-12",
    image: "",
    desc:
      "BUT is a web platform that allows to book and sell local tours and tourist attractions all over the world. It serves both as:    ",
    features: [],
    url: "https://dance2go.co.nz",
    techStack: "Java,Jsp,Mybatis,Spring,Camel,Oracle,Quartz",
    responsibilities: []
  },
  {
    title: "TMS",
    subtitle: "Neusoft",
    company: "Neusoft",
    start: "2009-10",
    end: "2011-11",
    image: "",
    desc:
      "TMS is a task management system that tracks staff daily work. It involves planning, tracking, and reporting. . It's been a long time. My database skill improved a lot in this project. I wrote hundreds of SQL.",
    features: [],
    url: "https://dance2go.co.nz",
    techStack: "Java,Struts,Ibatis,Spring,JSP,Oracle",
    responsibilities: ["wrote JSP, Servlets and SQL to add functionality"]
  }
];

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
              <li className="timeline_element timeline_element--now project">
                <div className="timeline_element-date">
                  <time class="timeline_element-date-text">
                    {Moment(project.start).format("MMM YYYY")} -{" "}
                    {project.end === ""
                      ? "PRESENT"
                      : Moment(project.end).format("MMM YYYY")}
                  </time>
                  <small>{project.company}</small>
                </div>
                <div className="timeline_element-contents">
                  <div className="project-text">
                    <a className="project-link">
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
                    <a class="button primary">More Details</a>
                    <div className="project-tech-stack">
                      <h6 className="tech-title">Technologies</h6>
                      <ul className="tech-tags">
                        {project.techStack.split(",").map((tag, i) => {
                          return (
                            <li key={i}>
                              <a className="button secondary">{tag}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="project-image">
                    <img src={project.image} />
                  </div>
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
