import { homeData } from '../../data';
import { HomeContainer, Heading, TagItem, Company, Socials } from './HomeStyles';
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
                Hey there, welcome to my website! I'm a second year Computer Science student at UWaterloo. I'm
                currently interning at{' '}
                <strong>
                    <Company href={company.website} target='_blank'>
                        {company.name}
                    </Company>
                </strong>{' '}
                as a <strong>{position}</strong>.
            </TagItem>
            {song ? (
                <>
                    <TagItem>My most listened to song at the moment is:</TagItem>
                    <RecentTrack song={song} />
                </>
            ) : null}

            <TagItem>Feel free to reach out or check my work at the socials below!</TagItem>
            <Socials>
                {socials.map(social => (
                    <Button secondary={social.secondary} key={social.id} href={social.href} target='_blank'>
                        {social.icon} {social.platform}
                    </Button>
                ))}
            </Socials>
        </HomeContainer>
    );
};

export default Home;
