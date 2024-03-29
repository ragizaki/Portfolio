import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "./styles/globalStyles";
import { Project } from "./lib/types";
import PersonalWebsiteImage from "./assets/personal-website.png";

export const navData = {
  navLogo: "ZM.",
  navItems: [
    { id: "about", value: "About", key: 1 },
    { id: "experience", value: "Experience", key: 0 },
    { id: "projects", value: "Projects", key: 2 },
  ],
};

export const homeData = {
  heading: "Zaki Machfj",
  isLooking: true,
  term: "Summer 2023",
  position: "Software Developer",
  company: {
    name: "Dejero Labs",
    website: "https://www.dejero.com",
  },
  socials: [
    {
      id: 0,
      platform: "Github",
      icon: <FaGithub />,
      href: "https://github.com/ragizaki",
      secondary: true,
    },
    {
      id: 1,
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/zaki-machfj",
      secondary: false,
    },
  ],
};

export const experienceData = [
  {
    id: 4,
    company: {
      name: "Deliverect",
      website: "https://www.deliverect.com/en-ca",
      logo: "https://images.ctfassets.net/2d5q1td6cyxq/7iuXLBrzKqqtKg3CtPnafb/f3f0e030fdf93c0bcda47939b57df3cd/Deliverect-ICON-2020_02_02__1_.png",
    },
    position: "Backend Developer Intern",
    tenure: "Sept 2023 - December 2023",
    location: "Toronto, ON",
    tools: ["FastAPI", "Flask", "Docker", "RabbitMQ", "SQL"],
    body: (
      <div>
        <p>
          I was one of the lead developers of a new billing microservice to
          support a new payment system with NetSuite. I worked with FastAPI to
          implement RESTFul api endpoints, and implemented asynchronous routes
          to handle a 60% increase in traffic. Additionally, I took owernship of
          a data analytics project to track the company's KPIs. I used Flask and
          RabbitMQ to create a data pipeline that parallelized POS aggregation
          tasks such as average order value, order time, etc, increasing
          throughput by ~550%.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    company: {
      name: "Empire Life",
      website: "https://www.empire.ca/",
      logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zfpoor4oosehrckwwfde",
    },
    position: "Software Developer Intern",
    tenure: "Jan - August. 2022",
    location: "Kingston, ON",
    tools: ["React", "Django", "Docker", "Terraform"],
    body: (
      <div>
        <p>
          My biggest project at Empire Life was designing a CI/CD pipeline to
          automate the creation of Auth0 resources for the company. Our dev
          teams use Auth0 to keep a consistent branding page across all of
          Empire's apps, but the problem is that all the code was hosted on
          Auth0, and any dev could go in and alter something. There was no
          concept of tracking changes, and it was hard to keep track of who was
          doing what. I used GitHub Actions to create a CI/CD pipeline that
          would automatically create Auth0 resources from GitHub PR's, and
          implemented Python and bash scripts to send the resources to Terraform
          Cloud to be deployed. I returned as a part-time student to ship the
          pipeline to production.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    company: {
      name: "Dejero Labs",
      website: "https://www.dejero.com/",
      logo: "https://pbs.twimg.com/profile_images/1082337275386740736/0kS2y2Oq_400x400.jpg",
    },
    position: "Software Developer Intern",
    tenure: "May - Aug. 2022",
    location: "Waterloo, ON",
    tools: ["Ruby on Rails", "Angular", "MySQL", "Golang"],
    body: (
      <div>
        <p>
          I had an amazing time at Dejero. I had the pleasure to work in an
          amazing team culture and meet some amazing people along the way.
          During this internship, I got the chance to work closely with Rails
          and Angular to create fullstack features for the company's online
          product{" "}
          <Link href="https://www.dejero.com/services/control">Control.</Link> I
          implemented the company's new 2FA system, and created Golang API
          routes for the 2FA authentication
        </p>
      </div>
    ),
  },
  {
    id: 1,
    company: {
      name: "Quill Podcasting Intern",
      website: "https://www.quillpodcasting.com",
      logo: "https://uploads-ssl.webflow.com/5d6af44f068031b45b8e83a5/5dd68aa836a0d4abf9966376_White%20on%20Purple.png",
    },
    position: "Software Developer",
    tenure: "May - Aug. 2021",
    location: "Toronto, ON",
    tools: [
      "Alpine.js",
      "Tailwindcss",
      "PostgreSQL",
      "Ruby on Rails",
      "AWS EC2",
    ],
    body: (
      <div>
        <p>
          Quill taught me a lot about working in a dynamic, fast-paced startup
          environment. I learned to be self-reliant, quick on my feet, and to
          pick up new technologies quickly. I built UI components from desinger
          mockups in Figma, for the company's online podcasting tool, including
          building a registration page, a cusotm podcast player, and interactive
          charts with Ruby on Rails, Postgres and TailwindCSS.
        </p>
      </div>
    ),
  },
  {
    id: 0,
    company: {
      name: "Glenforest STEM",
      website: "https://www.glenforeststem.com/",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Glenforest_Secondary_School_%28logo%29.png",
    },
    position: "Frontend Developer",
    tenure: "Sept. 2019 - May 2020",
    location: "Mississauga, ON",
    tools: ["React", "Redux", "TypeScript", "MaterialUI"],
    body: (
      <p>
        My first experience as a developer was when I volunteered as a frontend
        developer for Glenforest STEM, a club focused on advocating for the
        importance of STEM programs. Volunteering here was one of the main
        factors behind my passion for software development and pursuing it full
        time as a career. I used React and Redux to manage the company's main
        website, and render members' info, as well as upcoming events.
      </p>
    ),
  },
];

export const projectData: Project[] = [
  {
    id: 0,
    name: "Chess Openings Recommender",
    technologies: ["Jupyter Notebook", "Numpy", "Pandas"],
    description:
      "A reccommendation algorithm based on collaborative filtering and cosine similarity, to reccommend users new openings",
    image:
      "https://i.pinimg.com/originals/3e/5f/aa/3e5faa675ecad973342860eaea2eafad.png",
    href: "https://github.com/ragizaki/ChessOpeningsRecommender",
  },
  {
    id: 1,
    name: "Fantasy Football Notifier",
    technologies: ["Python", "BeautifulSoup4"],
    description:
      "Automated fantasy football notifications via text message to inform you of injured fantasy football players on the Sleeper platform",
    image:
      "https://th.bing.com/th/id/R.66ee2f04c1dc70ba8cb5ec9f780990d1?rik=jZThfaUvlkGfhQ&pid=ImgRaw&r=0",
    href: "https://github.com/ragizaki/fantasy-football-notifier",
  },
  {
    id: 2,
    name: "IconGPT",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    description:
      "A web app built with Next.js to design stunning icons with OpenAI's DALL-E-2 API. Supports Google SSO.",
    image:
      "https://user-images.githubusercontent.com/43770239/226809384-68d4b61a-a079-437f-933f-28ff2ef020ab.png",
    href: "https://github.com/ragizaki/IconGPT",
  },
  {
    id: 3,
    name: "Twitter Fact Checker",
    technologies: ["React", "GPT 3.5", "ChakraUI"],
    description:
      "Chrome extension to fact-check tweets in real-time using OpenAI'S GPT-3.5 Completion and Moderations APIs.",
    image: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    href: "https://github.com/ragizaki/TwitterFactCheck",
  },
  {
    id: 4,
    name: "Nature Camp",
    technologies: ["Next.js", "Prisma", "MySQL", "NextAuth"],
    description:
      "Web app for posting and rating popular campsites in Canada. Supports authentication and full CRUD functionality",
    image:
      "https://res.cloudinary.com/dmkc6lxx2/image/upload/v1588568342/Personal%20Blog/YelpCamp/2020-05-04_5_u8xwhq.png",
    href: "https://github.com/ragizaki/yelp-camp-nextjs-prisma",
  },
];
