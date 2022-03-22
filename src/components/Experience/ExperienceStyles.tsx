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

    @media screen and (max-width: 768px) {
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
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 0.1rem solid ${props => props.theme.text};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ExperienceInfo = styled.div`
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        padding: 0px;
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
    font-size: 1.3rem;
    margin: 0.6rem 0;
`;

export const Location = styled.p`
    margin-bottom: 0.8rem;
    font-weight: 700;
`;

export const Body = styled.div`
    line-height: 1.8rem;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
    }
`;

export const Tools = styled.p`
    margin-bottom: 1rem;
`;
