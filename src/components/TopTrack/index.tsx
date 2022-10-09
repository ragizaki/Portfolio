import { Track, TrackArtist, TrackImage, TrackTitle } from "./TopTrackStyles"
const TopTrack = ({ song }: any): JSX.Element => {
    return (
        <>
            {song ? (
                <Track href={song.external_urls.spotify} target="__blank">
                    <TrackImage src={song.album.images[0].url}></TrackImage>
                        <div style={{marginLeft: '1rem'}}>
                            <TrackTitle className="child">
                                {song.name}
                            </TrackTitle> 
                            <TrackArtist className="child">
                                {song.artists[0].name}
                            </TrackArtist>
                        </div>
                </Track>
            ) : null}
        </>
    )
}

export default TopTrack