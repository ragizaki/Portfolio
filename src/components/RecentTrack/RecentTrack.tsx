import React from 'react';
import { Song } from '../../services/spotify';

interface SongProps {
    song: Song | null;
}

const RecentTrack = ({ song }: SongProps): JSX.Element => {
    return (
        <div>
            {song ? (
                <>
                    <p>
                        My most listened to song is {song.name} by {song.artists}
                    </p>
                    <img src={song.image} />
                </>
            ) : null}
        </div>
    );
};

export default RecentTrack;
