import styled from 'styled-components';
import Theme from '../../styles/theme';

export const TrackImage = styled.img`
    height: 10rem;
    width: 10rem;
    margin: 0;
`

export const TrackTitle = styled.p`
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`

export const TrackArtist = styled.p`
    font-size: 1.4rem;
`

export const Track = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    &:hover .child {
        text-decoration: underline;
    }
`