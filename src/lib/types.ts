import internal from "stream";

export interface Track {
  name: string;
  artist: string;
  image: string;
  href: string;
}

export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: string[];
  href: string;
}
