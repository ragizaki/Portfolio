import styled from 'styled-components';
import Theme from '../../styles/theme';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 1rem;
    height: calc(100vh - 80px);

    @media screen and (max-width: 960px) {
        padding: 0px;
    }
`;

export const Heading = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    letter-spacing: 1px;

    @media screen and (max-width: 960px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;

export const TagItem = styled.p`
    font-size: 1.5rem;
    text-decoration: capitalize;
    margin-bottom: 20px;
    line-height: 2.3rem;

    @media screen and (max-width: 960px) {
        line-height: 40px;
    }
`;

export const Company = styled.a<{ theme: Theme }>`
    text-decoration: none;
    transition: all 100ms ease-in;
    color: ${props => props.theme.text};
    &:hover {
        opacity: 0.7;
    }
`;

export const Socials = styled.div`
    display: flex;
`;
