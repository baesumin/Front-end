import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aaTBzwuBCia0aC2Z1UoqbO_reMWp26GxzjLZQMeI5A8'
    }
});
