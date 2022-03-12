import { home } from '../../data';
import { HomeContainer, Heading, TagItem } from './HomeStyles';
import { Tag } from '../../util/interfaces';

type Props = {};

const Home = (props: Props) => {
    return (
        <HomeContainer>
            <Heading>{home.heading}</Heading>
            {home.tags.map(({ id, value }: Tag) => (
                <TagItem key={id}>{value}</TagItem>
            ))}
        </HomeContainer>
    );
};

export default Home;
