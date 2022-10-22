import { Track } from "../../lib/types";
import {
  TrackContainer,
  TrackArtist,
  TrackImage,
  TrackTitle,
} from "./RecentTrackStyles";

interface Props {
  track: Track;
}
const RecentTrack = ({ track }: Props): JSX.Element => {
  console.log;
  return (
    <TrackContainer href={track.href} target="__blank">
      <TrackImage src={track.image}></TrackImage>
      <div style={{ marginLeft: "1rem" }}>
        <TrackTitle className="child">{track.name}</TrackTitle>
        <TrackArtist className="child">{track.artist}</TrackArtist>
      </div>
    </TrackContainer>
  );
};

export default RecentTrack;
