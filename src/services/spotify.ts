import { Buffer } from 'buffer';

const clientId: string = import.meta.env.VITE_CLIENT_ID as string;
const clientSecret: string = import.meta.env.VITE_CLIENT_SECRET as string;

export const getToken = async (): Promise<string> => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });
    const data = await res.json();
    return data.access_token;
};

export const getMostRecentSong = async (token: string): Promise<Song> => {
    const res = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(res);
    const data = await res.json();

    // getting properties I want to export
    const { name } = data.items[0];
    const image = data.items[0].album.images[0].url;
    const artists = data.items[0].artists.map((artist: any) => artist.name);

    return { name, artists, image };
};

export interface Song {
    name: string;
    artists: string[];
    image: string;
}
