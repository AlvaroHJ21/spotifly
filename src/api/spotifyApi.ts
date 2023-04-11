import axios from 'axios';

export const spotifyApi = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export const accountSpotifyApi = axios.create({
    baseURL: 'https://accounts.spotify.com/api/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
            'Basic BQA5YEC1o0LWpKXcNd-zU_M0LS_Dgo82MeE8gQhWeQY5kz1HrIx2lfAH9nhviuG0_G50k9DNk9wPsyZow4tunyuL573nYQxxmuaGn-GXETIqBDOcIGxy            ',
    },
});

export async function getToken() {
    const { data } = await accountSpotifyApi.post('/token', {
        grant_type: 'client_credentials',
    });

    console.log(data);

    return data.access_token;
}

export async function search(query: string, type: string) {
    const { data } = await spotifyApi.get('/search', {
        params: {
            q: query,
            type: type,
        },
    });

    console.log(data);
}

export default { getToken };
