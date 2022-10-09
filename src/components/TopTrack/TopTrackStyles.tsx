import styled from 'styled-components';
import Theme from '../../styles/theme';

export const TrackImage = styled.img`
    height: 12rem;
    width: 12rem;
    margin: 0;
`

export const TrackTitle = styled.p`
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`

export const TrackArtist = styled.p`
    font-size: 1.6rem;
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