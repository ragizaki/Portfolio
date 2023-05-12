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
    id: 3,
    company: {
      name: "Empire Life",
      website: "https://www.empire.ca/",
      logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zfpoor4oosehrckwwfde",
    },
    position: "Software Developer",
    tenure: "Jan - Apr. 2022",
    location: "Kingston, ON",
    tools: ["React", "Django", "Docker", "Terraform"],
    body: (
      <div>
        <p>
          Shipping fullstack features for the company's IAM team with React,
          Django, Docker and Terraform.
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
    position: "Software Developer",
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
      name: "Quill Podcasting",
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
    image:
      "https://cdn-icons-png.flaticon.com/512/124/124021.png",
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
