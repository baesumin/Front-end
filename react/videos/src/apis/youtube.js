import axios from 'axios';

const KEY = 'AIzaSyDNdWzE4UMDhkfb8hWuM9k-SZwGgc8Una8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
