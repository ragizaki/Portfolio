import { homeData } from "../../data";
import { HomeContainer, Heading, TagItem, Company, Socials } from "./styles";
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
      <TagItem style={{ fontSize: "2rem", opacity: 0.8, marginBottom: "2rem" }}>
        Software Developer | CS @ UWaterloo
      </TagItem>
      <TagItem>
        Hey there 👋 I'm a 3rd year CS student at UWaterloo. I enjoy playing ⚽
        and snowboarding in my free time.
        {isLooking ? (
          <span>
            I'm currently seeking SWE internships for <strong>Fall 2023</strong>
            .
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
          Currently learning <strong>Next.js</strong> to build fullstack apps,
          and deep learning with <strong>PyTorch</strong>.
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
