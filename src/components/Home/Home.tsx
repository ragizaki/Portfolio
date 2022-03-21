import { homeData } from '../../data';
import { HomeContainer, Heading, TagItem, Company, Socials } from './HomeStyles';
import { Button } from '../../styles/globalStyles';

const Home = (): JSX.Element => {
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
            <div>
                <TagItem>
                    I love building high-quality tools that are user-friendly and simple. <br /> I'm currently
                    learning <strong>Next.js</strong>, <strong>TypeScript </strong>and <strong>Firebase</strong> to
                    create full-stack apps.
                </TagItem>
            </div>

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
