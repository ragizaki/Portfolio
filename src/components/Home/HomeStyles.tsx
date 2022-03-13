import styled from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const HomeContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 3rem;
    height: calc(100vh - 80px);
`;

export const Heading = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 960px) {
        font-size: 3rem;
    }
`;

export const TagItem = styled.p`
    font-size: 1.5rem;
    text-decoration: capitalize;
    color: black;
    margin-bottom: 25px;

    @media screen and (max-width: 960px) {
        padding: 0 20px;
        line-height: 40px;
    }
`;

export const Socials = styled.div`
    margin-top: 20px;
`;
