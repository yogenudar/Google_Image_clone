import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 0f6DgfyDXVe5_5xAYDXbAZ2wJZ0KNsweJjOgfbNIQvI',
        },
        params:{
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;