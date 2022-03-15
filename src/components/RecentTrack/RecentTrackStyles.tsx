import styled from 'styled-components';

export const TrackContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const Image = styled.img`
    height: 130px;
    width: 130px;
    margin-right: 15px;
`;

export const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SongTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const SongArtists = styled.h3`
    font-size: 1.2rem;
    margin-top: 10px;
    opacity: 0.8;
`;
