import { homeData } from '../../data';
import { HomeContainer, Heading, TagItem, Company, Socials } from './HomeStyles';
import { Button } from '../../styles/globalStyles';
import TopTrack from '../TopTrack'

const Home = ({ song}: any): JSX.Element => {
    const { heading, socials, position, company, isLooking, term } = homeData;
    return (
        <HomeContainer>
            <Heading>{heading}</Heading>
            <TagItem style={{fontSize: '2rem', opacity: 0.8, marginBottom: '3rem'}}>Software Developer | CS @ UWaterloo</TagItem>
            <TagItem>
                Hey there 👋 I'm a 3rd year CS student at UWaterloo. I love playing ⚽ and listening to 🎵 in my free time! {' '}  
                {isLooking 
                    ? <span>I'm currently seeking SWE internships for <strong>{term}</strong>.</span> 
                    : <span>I'm currently interning at{' '}
                        <strong>
                            <Company href={company.website} target='_blank'>
                                {company.name}
                            </Company>
                        </strong>{' '}
                        as a <strong>{position}</strong>.</span>
                }
            </TagItem>
            <div>
                <TagItem>
                    {/* I love building high-quality tools that are user-friendly and meaningful. <br /> */}
                    Currently learning <strong>Next.js</strong>, <strong>C++</strong>, <strong>Golang</strong> and <strong>AWS</strong> to
                    create cool projects in my free time. Feel free to reach out or check my work at the socials below!
                </TagItem>
            </div>

            <Socials>
                {socials.map(social => (
                    <Button secondary={social.secondary} key={social.id} href={social.href} target='_blank'>
                        {social.icon} {social.platform}
                    </Button>
                ))}
            </Socials>

            <TagItem style={{marginTop: '2rem', marginBottom: '0.5rem'}}>
                Check out my most listened to song recently!
            </TagItem>

            <TopTrack song={song} />
        </HomeContainer>
    );
};

export default Home;
