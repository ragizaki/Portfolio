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
  term: "Winter 2023",
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
    id: 2,
    company: {
      name: "Dejero Labs",
      website: "https://www.dejero.com/",
      logo: "https://pbs.twimg.com/profile_images/1082337275386740736/0kS2y2Oq_400x400.jpg",
    },
    position: "Software Developer",
    tenure: "May - Aug. 2022",
    location: "410 Albert Street - Waterloo, ON",
    tools: ["Ruby on Rails", "Angular", "MySQL", "Golang"],
    body: (
      <div>
        <p>
          I had an amazing time at Dejero. I had the pleasure to work in an
          amazing team culture and meet some amazing people along the way. I
          wanted to thank Jeremy and Amanda for their mentorship and for giving
          me many opportunities to create meaningful work and learn new things.
        </p>
        <br />
        <p>
          During this internship, I got the chance to work closely with Rails
          and Angular to create fullstack features for the company's online
          product{" "}
          <Link href="https://www.dejero.com/services/control">Control.</Link>{" "}
          In particular, one of my biggest tickets was redesigning and
          implementing the app's 2FA system to meet the DSLA certifications
          before the end of the quarter. Most of the work was done in Rails and
          Golang, setting up new routes and endpoints for different cases, as
          well as adding UI features with Angular. I worked closely with Jeremy,
          the Senior Web Developer, and presented the finished product at the
          monthly stakeholders meeting.
        </p>
        <br />
        <p>
          It was one of the largest projects I've been involved with to date,
          and I learned invaluable lessons about design, testing, and
          implementing a new feature in a large codebase.
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
      <p>
        This was my first internship, and it was one of the most fun and
        valuable experiences I've had. The path to this role was not easy; I
        applied to around 300 jobs on WaterlooWorks and got around 3 interviews,
        and this was my only offer. It was my first job search and I was
        extremely nervous, but I learned a lot, especially about the importance
        of treating an interview like a conversation rather than, well, an
        interview.
      </p>
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
        One of my first experiences as a developer was when I volunteered as a
        frontend developer for Glenforest STEM, one of my highschool clubs
        focused on advocating for the importance of STEM programs. Volunteering
        here was one of the main factors behind my passion for software
        development and pursuing it full time as a career, and I'm really glad
        to have met the people I did and gained such valuable experience along
        the way. It was one of the first times I used React profesionally, and I
        fell in love with its reusability and simplicity.
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
    name: "Personal Website",
    technologies: ["React", "TypeScript"],
    description:
      "My website, built with React and TypeScript. Check in regularly for updates as I grow as a developer!",
    image: PersonalWebsiteImage,
    href: "https://github.com/ragizaki/zaki",
  },
  {
    id: 3,
    name: "Nature Camp",
    technologies: ["Next.js", "Prisma", "MySQL", "NextAuth"],
    description:
      "Web app for posting and rating popular campsites in Canada. Supports authentication and full CRUD functionality",
    image:
      "https://res.cloudinary.com/dmkc6lxx2/image/upload/v1588568342/Personal%20Blog/YelpCamp/2020-05-04_5_u8xwhq.png",
    href: "https://github.com/ragizaki/yelp-camp-nextjs-prisma",
  },
];
