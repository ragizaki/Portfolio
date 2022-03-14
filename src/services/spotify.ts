const TOKEN: string =
    'BQA6wp3hv8N1Q_NIgiU8WGoIVRAsUCKZ15rbQlFkRBCRuinZkxkO_HVVtKQy6zOoOFAg8a1LefTVmaG-Ul-C8cPI0ERI0Mx6LyZhAX22E0CodP0IYbwK_Is9QXCxgle-SzTQMH4lczPkp2AY9dnrpXxsq0vP';

export const getMostRecentSong = async () => {
    const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=1', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN} `,
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
