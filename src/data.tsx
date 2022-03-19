import { NavLink, LandData } from './util/interfaces';
import { FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navData: NavLink[] = [
    { id: 'experience', value: 'Experience', key: 0 },
    { id: 'about', value: 'About', key: 1 },
    { id: 'projects', value: 'Projects', key: 2 },
];

export const homeData = {
    heading: 'Zaki Machfj',
    position: 'Software Developer',
    company: {
        name: 'Dejero Labs',
        website: 'https://www.dejero.com',
    },
    tags: [
        { value: 'Developer', id: 0 },
        { value: 'Student', id: 1 },
        { value: 'Learner', id: 2 },
    ],
    socials: [
        { id: 0, platform: 'Github', icon: <FaGithub />, href: 'https://github.com/ragizaki', secondary: true },
        {
            id: 1,
            platform: 'LinkedIn',
            icon: <FaLinkedin />,
            href: 'https://linkedin.com/in/zaki-machfj',
            secondary: false,
        },
    ],
};

export const experienceData = [
    {
        id: 2,
        company: {
            name: 'Dejero Labs',
            website: 'https://www.dejero.com/',
            logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1430774933/zozcnfnfademsaywt3nu.png',
        },
        position: 'Software Developer',
        tenure: 'Incoming May 2',
        location: 'Waterloo, ON',
        tools: ['Alpine.js', 'Tailwindcss', 'PostgreSQL', 'Ruby on Rails', 'AWS EC2'],
        body: <p>I'm super excited to join Dejero's Web Applications team this summer!</p>,
    },
    {
        id: 1,
        company: {
            name: 'Quill Podcasting',
            website: 'https://www.quillpodcasting.com',
            logo: 'https://uploads-ssl.webflow.com/5d6af44f068031b45b8e83a5/5dd68aa836a0d4abf9966376_White%20on%20Purple.png',
        },
        position: 'Software Developer',
        tenure: 'May - Aug. 2021',
        location: 'Toronto, ON',
        tools: ['Alpine.js', 'Tailwindcss', 'PostgreSQL', 'Ruby on Rails', 'AWS EC2'],
        body: (
            <p>
                This was my first internship, and it was one of the most fun and valuable experiences I've had. The
                path to this role was not easy; I applied to around 300 jobs on WaterlooWorks and got around 3
                interviews, and this was my only offer. It was my first job search and I was extremely nervous, but
                I learned a lot, especially about the importance of treating an interview like a conversation
                rather than, well, an interview.
            </p>
        ),
    },
    {
        id: 0,
        company: {
            name: 'Glenforest STEM',
            website: 'https://www.glenforeststem.com/',
            logo: 'https://upload.wikimedia.org/wikipedia/en/2/29/Glenforest_Secondary_School_%28logo%29.png',
        },
        position: 'Frontend Developer',
        tenure: 'Sept. 2019 - May 2020',
        location: 'Mississauga, ON',
        tools: ['Alpine.js', 'Tailwindcss', 'PostgreSQL', 'Ruby on Rails', 'AWS EC2'],
        body: (
            <p>
                One of my first experiences as a developer was when I volunteered as a frontend developer for
                Glenforest STEM, one of my highschool clubs focused on advocating for the importance of STEM
                programs. Volunteering here was one of the main factors behind my passion for software development
                and pursuing it full time as a career, and I'm really glad to have met the people I did and gained
                such valuable experience along the way. It was one of the first times I used React profesionally,
                and I fell in love with its reusability and simplicity.
            </p>
        ),
    },
];
