import { homeData } from "../../data";
import {
  HomeContainer,
  Heading,
  TagItem,
  Company,
  Socials,
  ChessLink,
} from "./styles";
import { Button } from "../../styles/globalStyles";
import RecentTrack from "../RecentTrack";
import { Track } from "../../lib/types";

interface Props {
  track: Track | null;
}

const Home = ({ track }: Props): JSX.Element => {
  const { heading, socials, position, company, isLooking } = homeData;
  return (
    <HomeContainer id="about">
      <Heading>{heading}</Heading>
      <TagItem>
        Hey there 👋 I'm a 4th year CS student at UWaterloo. I enjoy playing ⚽,
        🏂 and ♟️ in my free time (check me out on{" "}
        <ChessLink href="https://www.chess.com/member/zakixd" target="_blank">
          chess.com
        </ChessLink>
        ). I have a passion for ML and AI, and exploring their applications in
        the real world.
        {isLooking ? (
          <span>
            {" "}
            I'm currently seeking SWE internships for{" "}
            <strong>Summer & Fall 2024</strong>.
          </span>
        ) : (
          <span>
            I'm currently interning at{" "}
            <strong>
              <Company href={company.website} target="_blank">
                {company.name}
              </Company>
            </strong>{" "}
            as a <strong>{position}</strong>.
          </span>
        )}
      </TagItem>
      <div>
        <TagItem>
          {/* I love building high-quality tools that are user-friendly and meaningful. <br /> */}
          Currently working on building computer vision models for 3D chessboard
          detection and recommendation systems for chess openings with{" "}
          <strong>PyTorch</strong> and <strong>Tensorflow</strong>. Feel free to
          check my work out below.
        </TagItem>
      </div>

      <Socials>
        {socials.map((social) => (
          <Button
            secondary={true}
            key={social.id}
            href={social.href}
            target="_blank"
          >
            {social.icon} {social.platform}
          </Button>
        ))}
      </Socials>

      {track && (
        <>
          <TagItem style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
            Here's the last song I listened to on <strong>Spotify</strong>
          </TagItem>
          <RecentTrack track={track} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
