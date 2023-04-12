import axios from 'axios';

async function getMyInfo() {
    const access_token = localStorage.getItem('access_token');
    const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return data;
}

async function getTopArtists() {
    const access_token = localStorage.getItem('access_token');
    const { data } = await axios.get('https://api.spotify.com/v1/me/top/artists?limit=6', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return data.items;
}

async function getTopTracks(top: number = 4) {
    const access_token = localStorage.getItem('access_token');
    const { data } = await axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=${top}&offset=2`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return data.items;
}

async function searchTracks(query: string) {
    const access_token = localStorage.getItem('access_token');
    const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=8`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return data.tracks.items;
}

export default {
    getMyInfo,
    getTopArtists,
    getTopTracks,
    searchTracks
};
