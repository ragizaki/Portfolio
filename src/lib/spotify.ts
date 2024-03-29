import { Buffer } from "buffer";

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_REFRESH_TOKEN as string;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const RECENT_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${RECENT_TRACK_ENDPOINT}?limit=1`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
