export interface NavLink {
    id: string;
    value: string;
    key: number;
}

export interface Tag {
    id: number;
    value: string;
}

export interface Social {
    id: number;
    platform: string;
    icon: any;
    href: string;
    secondary: boolean;
}

export interface LandData {
    heading: string;
    tags: Tag[];
    socials: Social[];
    position: string;
    company: string;
}
