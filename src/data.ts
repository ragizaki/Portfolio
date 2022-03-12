interface NavLink {
    id: string;
    value: string;
    key: number;
}

export const NavData: NavLink[] = [
    { id: 'home', value: 'Home', key: 0 },
    { id: 'about', value: 'About', key: 1 },
    { id: 'projects', value: 'Projects', key: 2 },
];
