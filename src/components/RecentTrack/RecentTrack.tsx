import { TrackContainer, Image, SongInfo, SongArtists, SongTitle } from './RecentTrackStyles';
import { Song } from '../../services/spotify';

interface SongProps {
    song: Song | null;
}

const RecentTrack = ({ song }: SongProps): JSX.Element => {
    return (
        <TrackContainer>
            {song ? (
                <>
                    <Image src={song?.image} />
                    <SongInfo>
                        <SongTitle>{song?.name}</SongTitle>
                        <SongArtists>{song?.artists}</SongArtists>
                    </SongInfo>
                </>
            ) : null}
        </TrackContainer>
    );
};

export default RecentTrack;
