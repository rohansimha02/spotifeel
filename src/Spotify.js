import axios from 'axios';

const CLIENT_ID = 'a0bc55dc08ed490dbee2874375730a57'; // Replace with your actual Client ID
const CLIENT_SECRET = '8b68b7700e9e461c962d4e454817abf6'; // Replace with your actual Client Secret
const BASE_URL = 'https://api.spotify.com/v1';

let accessToken = '';

const getAccessToken = async () => {
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${credentials}`,
        },
    });
    accessToken = response.data.access_token;
    console.log('Access token retrieved:', accessToken);
};

const apiRequest = async (url, params = {}) => {
    if (!accessToken) await getAccessToken();

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        params
    });
    console.log('API response:', response.data);
    return response.data;
};

export const getSongs = async () => {
    const url = `${BASE_URL}/tracks`;
    return apiRequest(url);
};

export const getRecommendations = async (emotion) => {
    const seed_genres = mapEmotionToGenre(emotion);
    const url = `${BASE_URL}/recommendations`;
    return apiRequest(url, { seed_genres });
};

const mapEmotionToGenre = (emotion) => {
    const emotionGenreMap = {
        happy: 'pop',
        sad: 'blues',
        energetic: 'rock',
        calm: 'classical',
    };

    return emotionGenreMap[emotion] || 'pop';
};
