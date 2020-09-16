// import { link } from "fs";

const projects = [
  // {
  //   title: "Clubphysio",
  //   name: "clubphysio",
  //   subtitle: "Physiotherapy is our profession but people are our focus.",
  //   role: "Web developer",
  //   company: "Freelance",
  //   start: "2020-07",
  //   end: "2020-07",
  //   image: "/assets/images/clubphysio/landing.png",
  //   desc: "A typical example of company website, featuring:",
  //   features: [
  //     "A Responsible Website",
  //     "Customer Online Booking",
  //     "the content can be easily edited from the browser by accessing the admin’s panel."
  //   ],
  //   url: "https://dance2go.co.nz",
  //   techStack: "Wordpress",
  //   responsibilities: [
  //     "a SaaS platform for tour operators and activity providers, to manage their offers, customers, orders, and agents cooperation",
  //     "a marketplace for end-customers to book the local tours and activities while or before the travelling."
  //   ]
  // },

  {
    title: "Dance2Go",
    name: "dance2go",
    subtitle: "Dancewear for every day at every moment through every step.",
    role: "Web developer",
    company: "Freelance",
    start: "2019-11",
    end: "2019-12",
    image: "/assets/images/dance2go/landing-short.png",
    images: [
      { title: "Landing", url: "/assets/images/dance2go/landing.png" },
      {
        title: "Product Category",
        url: "/assets/images/dance2go/category_.png"
      },
      {
        title: "Product Details",
        urls: ["/assets/images/dance2go/product_.png"]
      },
      { title: "Cart", urls: ["/assets/images/dance2go/cart_.png"] },
      { title: "Checkout", urls: ["/assets/images/dance2go/checkout_.png"] },
      {
        title: "Contact Us",
        urls: ["/assets/images/dance2go/contact-us_.png"]
      },
      {
        title: "Delivery Returns",
        url: "/assets/images/dance2go/delivery-returns_.png"
      }
    ],
    desc:
      "Dance2Go is an E-Commerce Website that sells dancewear. It serves both as:",
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
    ],
    onlive: false,
    btn: {
      show: true,
      type: "link",
      text: "More Details"
    }
  },
  {
    title: "E-IMS",
    name: "e-ims",
    subtitle: "Computer Remarketing Specialist",
    role: "Full-Stack Developer",
    company: "E-Site Ltd.",
    start: "2020-01",
    end: "",
    image: "/assets/images/esite/Login.png",
    images: [
      { title: "Login", urls: ["/assets/images/esite/Login.png"] }
      // { title: "Dashboard", urls: ["/assets/images/esite/landing.png"] }
    ],
    desc:
      "E-IMS is an Inventory Management System that allows users to track the IT assets, suppliers as well as purchase and sales information. ",
    features: [
      "Created restful API endpoints including Authentication, IT Assets, Orders, Suppliers and Packages modules with Node.js, Express, Mongoose and MongoDB.",
      "Testing API endpoints using postman.",
      "Built admin platform for managing IT Assets, Orders, Packages  and users.",
      "Implemented complex UI components with Reactjs and SCSS.",
      "Built CI/CD pipeline with Jenkins on GoogleCloud"
    ],
    url: "",
    techStack: "Reactjs,Nodejs,Sass,MongoDB,Expressjs,Docker",
    responsibilities: [
      "Production Environment Setup",
      "Worked on providing API endpoints with Node.js/Inversify and MongoDB.",
      "Built from scratch admin platform for managing platform's database entities and users using React/Node/Mongoose.",
      "Implemented complex UI components with React/Javascript and SCSS."
    ],
    onlive: false,
    btn: {
      show: false,
      type: "link",
      text: "More Details"
    }
  },
  {
    title: "Vision for Humanity",
    name: "vfh",
    subtitle: "",
    role: "Web developer",
    company: "Vision for Humanity",
    start: "2019-10",
    end: "2020-01",
    image: "/assets/images/vfh/Landing_.png",
    images: [
      { title: "Landing", url: "/assets/images/vfh/Landing_.png" },
      {
        title: "Section 2 in Landing",
        url: "/assets/images/vfh/Landing_2.png"
      },
      {
        title: "Vision for Humanity",
        urls: ["/assets/images/vfh/vision_h.png"]
      },
      {
        title: "Vision for Business",
        urls: ["/assets/images/vfh/vision_b.png"]
      },
      { title: "Visions", urls: ["/assets/images/vfh/visions_.png"] }
    ],

    desc: "A typical example of company website, featuring: ",
    features: [
      "modern one-page, responsive web design",
      "custom subpages, gallery, contact form;",
      "admin panel"
    ],
    url: "http://vfh.org.nz/",
    techStack: "Wordpress",
    responsibilities: [
      "As the only developer, I finish this website on my own."
    ],
    onlive: true,
    btn: {
      show: true,
      type: "link",
      text: "More Details"
    }
  },

  {
    title: "IBM W3 Homepage",
    name: "w3",
    subtitle: "",
    role: "Senior Application Developer",
    company: "IBM China",
    start: "2013-06",
    end: "2018-01",
    image: "/assets/images/ibmw3/Signin1-2.png",
    images: [
      { title: "Landing", urls: ["/assets/images/ibmw3/Signin1-2.png"] },
      {
        title: "Small-Medium-Large Card",
        urls: [
          {
            width: "25%",
            src: "/assets/images/ibmw3/headlines1.png"
          },
          {
            width: "25%",
            src: "/assets/images/ibmw3/headlines3.png"
          },
          {
            width: "45%",
            src: "/assets/images/ibmw3/headlines4.png"
          }
        ]
      },
      {
        title: "Drag And Drop Card",
        urls: [
          { width: "25%", src: "/assets/images/ibmw3/Placesdrag-1-2.png" },
          {
            width: "70%",
            src: "/assets/images/ibmw3/Expandednewdesignsmall-1-3.png"
          }
        ]
      },
      {
        title: "Theme Setting",
        urls: [
          { width: "100%", src: "/assets/images/ibmw3/Designsettings2.png" },
          {
            width: "100%",
            src: "/assets/images/ibmw3/Designsettings3.png"
          }
        ]
      },
      {
        title: "Third Party APIs Integrated",
        urls: [
          { width: "45%", src: "/assets/images/ibmw3/Think40-2.png" },
          { width: "45%", src: "/assets/images/ibmw3/Statuses4.png" }
        ]
      }
    ],
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
    ],
    onlive: false,
    btn: {
      show: true,
      type: "link",
      text: "More Details"
    }
  },
  {
    title: "IBM 荟专享",
    name: "ibmminiprog",
    subtitle: "",
    company: "IBM China",
    start: "2018-04",
    end: "2018-05",
    image: "",
    desc:
      'IBM "荟专享" is built on Wechat Mini Progrom Platform. I am reponsible for backend proxy building.',
    features: [],
    url: "https://dance2go.co.nz",
    techStack: "Java,Jersey,DB2,Restful API",
    responsibilities: [],
    onlive: false,
    btn: {
      show: true,
      type: "link",
      text: "Show More"
    }
  },
  {
    title: "Bulk Utility Tool",
    subtitle: "",
    company: "B.T Dalian",
    start: "2019-11",
    end: "2019-12",

    desc:
      "BUT is a web platform that allows to book and sell local tours and tourist attractions all over the world. It serves both as:    ",
    features: [],
    url: "https://dance2go.co.nz",
    techStack: "Java,Jsp,Mybatis,Spring,Camel,Oracle,Quartz",
    responsibilities: [],
    onlive: false,
    btn: {
      show: false
    }
  },
  {
    title: "TMS",
    subtitle: "Neusoft Dalian",
    company: "Neusoft",
    start: "2009-10",
    end: "2011-11",

    desc:
      "TMS is a task management system that tracks staff daily work. It involves planning, tracking, and reporting. . It's been a long time. My database skill improved a lot in this project. I wrote hundreds of SQL.",
    features: [],
    url: "https://dance2go.co.nz",
    techStack: "Java,Struts,Ibatis,Spring,JSP,Oracle",
    responsibilities: ["wrote JSP, Servlets and SQL to add functionality"],
    onlive: false,
    btn: {
      show: false
    }
  }
];
export default projects;
