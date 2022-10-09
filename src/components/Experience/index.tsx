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
    Tools,
} from './ExperienceStyles';

const Experience = (): JSX.Element => {
    return (
        <ExperienceContainer id='experience'>
            <Heading>My Journey</Heading>
            {experienceData.map(role => (
                <Card key={role.id}>
                    <CompanyImage src={role.company.logo} />
                    <ExperienceInfo>
                        <Company href={role.company.website} target='_blank'>
                            {role.company.name}
                        </Company>
                        <Role>
                            {role.position}, <i>{role.tenure}</i>
                        </Role>
                        <Location>{role.location}</Location>
                        {role.tools.length ? (
                            <Tools>
                                Tools: <i>{role.tools.join(', ')}</i>
                            </Tools>
                        ) : null}

                        <Body>{role.body}</Body>
                    </ExperienceInfo>
                </Card>
            ))}
        </ExperienceContainer>
    );
};

export default Experience;
