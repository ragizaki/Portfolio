import { homeData } from '../../data';
import { HomeContainer, Heading, TagItem, Socials } from './HomeStyles';
import { Button } from '../../styles/globalStyles';
import { Song } from '../../services/spotify';
import RecentTrack from '../RecentTrack/RecentTrack';

interface HomeProps {
    song: Song | null;
}

const Home = ({ song }: HomeProps) => {
    const { heading, socials, position, company } = homeData;
    return (
        <HomeContainer>
            <Heading>{heading}</Heading>
            <TagItem>
                Hey there, welcome to my website! I'm a second year Computer Science student at UWaterloo.
            </TagItem>
            <TagItem>
                I'm currently interning at <strong>{company}</strong> as a <strong>{position}</strong>.
            </TagItem>
            <TagItem>Feel free to reach out or check my work at the socials below!</TagItem>
            <Socials>
                {socials.map(social => (
                    <Button secondary={social.secondary} key={social.id} href={social.href} target='_blank'>
                        {social.icon} {social.platform}
                    </Button>
                ))}
            </Socials>
            <RecenTrack song={song} />
        </HomeContainer>
    );
};

export default Home;
