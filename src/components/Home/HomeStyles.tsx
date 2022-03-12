import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const HomeContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1.5rem;
`;

export const TagItem = styled.p`
    font-size: 1.3rem;
    text-decoration: capitalize;
    color: black;
    margin-bottom: 10px;
`;
