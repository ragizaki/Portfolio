import { Buffer } from 'buffer';
const clientId = 'b9f66cf24cbe4874908781e3287ee9ca';
const clientSecret = '394e840a395a4ca28fbade405f0d626f';

export const getToken = async (): Promise<string> => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
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
