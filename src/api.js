export const getSongs = async () => {
    const response = await fetch('http://localhost:5000/api/songs');
    return response.json();
};

export const getRecommendations = async (emotion) => {
    const response = await fetch(`http://localhost:5000/api/recommend?emotion=${emotion}`);
    return response.json();
};
