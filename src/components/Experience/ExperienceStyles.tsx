import styled from 'styled-components';
import Theme from '../../styles/theme';

export const ExperienceContainer = styled.div`
    width: 100%;
    margin-bottom: 4rem;
`;

export const Card = styled.div<{ theme: Theme }>`
    display: flex;
    margin-bottom: 3rem;
    &:first-child {
        background: red;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const Heading = styled.h2`
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1rem;
`;

export const CompanyImage = styled.img`
    object-fit: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

export const ExperienceInfo = styled.div`
    padding: 0 50px;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Company = styled.a<{ theme: Theme }>`
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
        opacity: 0.7;
    }
`;

export const Role = styled.p`
    font-size: 1.2rem;
    margin: 0.6rem 0;
`;

export const Location = styled.p`
    margin-bottom: 0.7rem;
    font-weight: 700;
`;

export const Body = styled.p`
    line-height: 1.5rem;
`;
