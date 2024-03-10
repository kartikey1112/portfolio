import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  codingNinjas,
  innostax,
  postgres,
  java,
  feathers,
  sql,
  founder,
  ceo,
  cody
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem solver",
    icon: mobile,
  },
  {
    title: "Team Player",
    icon: backend,
  },
  {
    title: "Quick Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "feathers",
    icon: feathers,
  },
  {
    name:"sql",
    icon:sql
  },

];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Coding Ninjas",
    icon: codingNinjas,
    iconBg: "#ffffff",
    date: "Aug 2022 - December 2022",
    points: [
      "As a Teaching Assistant at Coding Ninjas for Data Structures and Algorithms in Java, I provided hands-on support to students, aiding in comprehension and practical implementation. Collaborating with instructors, I fostered an inclusive learning environment, nurturing students' growth and confidence. Guiding students through challenges and witnessing their progress was immensely fulfilling, enriching my own understanding and communication skills.",
    ],
  },
  {
    title: "Associate software developer",
    company_name: "Innostax Tech LLC",
    icon: innostax,
    iconBg: "#ffffff",
    date: "May 2023 - Nov 2023",
    points: [
      "Started by resolving minor bugs on a project TAVAjs through which user can create backend APIs by drag and drop",
      "Implemented the logging functionality in the whole application using AWS cloudWatch ",
      "Worked with backend team for major integrations like GCP and Swagger using Feathers JS framework ",
    ],
  },
  {
    title: "SDE-1",
    company_name: "Innostax Tech LLC",
    icon: innostax,
    iconBg: "#ffffff",
    date: "Jan 2024 - Present",
    points: [
      "Started working on a new Project TripTava.com, a flight booking Application",
      "Integrated multiple providers i.e Amadeus and Travel Boutique India for flight booking ",
      "Created Backend API's for fetching flights price, booking , seat selection, Cancellation & Refund",
      "Integrated the multiple Backend API'S on frontend and created Admin dashboard for flight booking APP",
      ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Kartikey is one of the best developers in innostax corporation with such less experience",
    name: "Cody Miles",
    designation: "Founder",
    company: "Ashore App",
    image: cody,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like kartikey does.",
    name: "Prashant Tondapau",
    designation: "CEO and Founder",
    company: "Innostax LLC",
    image: founder,
  },
  {
    testimonial:
      "After kartikey optimized our website, our traffic increased by 50%. We can't thank them enough!     ",
    name: "Sahil Khurana",
    designation: "CTO",
    company: "Innostax Tech LLC",
    image: ceo,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
