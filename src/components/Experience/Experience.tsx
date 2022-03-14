import React from 'react';
import { experienceData } from '../../data';

type Props = {};

const Experience = (props: Props) => {
    return (
        <div>
            {experienceData.map(role => (
                <div>
                    <img src={role.company.logo} />
                    <p>{role.company.name}</p>
                    <p>
                        {role.position}, {role.tenure}
                    </p>
                    <p>{role.location}</p>
                    {role.body}
                </div>
            ))}
        </div>
    );
};

export default Experience;
