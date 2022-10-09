import { Buffer } from 'buffer';

const client_id = import.meta.env.VITE_CLIENT_ID
const client_secret = import.meta.env.VITE_CLIENT_SECRET
const refresh_token = 'AQA33txWJJJDGzGhC3XfeX8KasliIVRAybbeGLit9zL-y2mQPPmjaKpfax_n8FD0Or-ynDxlc9tw7vQN4fBYQDsICqA_WrEZ8G-bdQNk52pbjLwqtdYexxYsUuImfdP5wHo'

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token
      })
    });
    return response.json();
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();
  
    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
};