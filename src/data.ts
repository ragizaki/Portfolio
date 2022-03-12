import { NavLink, LandData } from './util/interfaces';

export const nav: NavLink[] = [
    { id: 'experience', value: 'Experience', key: 0 },
    { id: 'about', value: 'About', key: 1 },
    { id: 'projects', value: 'Projects', key: 2 },
];

export const home: LandData = {
    heading: 'Zaki Machfj',
    tags: [
        { value: 'Developer', id: 0 },
        { value: 'Student', id: 1 },
        { value: 'Learner', id: 2 },
    ],
};
