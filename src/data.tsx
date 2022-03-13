import { NavLink, LandData } from './util/interfaces';
import { FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navData: NavLink[] = [
    { id: 'experience', value: 'Experience', key: 0 },
    { id: 'about', value: 'About', key: 1 },
    { id: 'projects', value: 'Projects', key: 2 },
];

export const homeData: LandData = {
    heading: 'Zaki Machfj',
    position: 'Software Developer',
    company: 'Dejero Labs',
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
