import { experienceData } from '../../data';
import {
    Heading,
    CompanyImage,
    ExperienceContainer,
    Card,
    ExperienceInfo,
    Company,
    Role,
    Location,
    Body,
} from './ExperienceStyles';

const Experience = (): JSX.Element => {
    return (
        <ExperienceContainer id='experience'>
            <Heading>My Journey</Heading>
            {experienceData.map(role => (
                <Card key={role.id}>
                    <CompanyImage src={role.company.logo} />
                    <ExperienceInfo>
                        <Company>
                            <a>{role.company.name}</a>
                        </Company>
                        <Role>
                            {role.position}, <i>{role.tenure}</i>
                        </Role>
                        <Location>{role.location}</Location>
                        <Body>{role.body}</Body>
                    </ExperienceInfo>
                </Card>
            ))}
        </ExperienceContainer>
    );
};

export default Experience;
