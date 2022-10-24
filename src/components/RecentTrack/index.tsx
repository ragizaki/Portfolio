import { Track } from "../../lib/types";
import { TrackContainer, TrackArtist, TrackImage, TrackTitle } from "./styles";

interface Props {
  track: Track;
}
const RecentTrack = ({ track }: Props): JSX.Element => {
  console.log;
  return (
    <TrackContainer href={track.href} target="__blank">
      <TrackImage src={track.image} alt={`${track.name} by ${track.artist}`} />
      <div style={{ marginLeft: "1rem" }}>
        <TrackTitle className="child">{track.name}</TrackTitle>
        <TrackArtist className="child">{track.artist}</TrackArtist>
      </div>
    </TrackContainer>
  );
};

export default RecentTrack;
