export interface NavLink {
    id: string;
    value: string;
    key: number;
}

interface Tag {
    id: number;
    value: string;
}

export interface LandData {
    heading: string;
    tags: Tag[];
}
