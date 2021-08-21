import axios from 'axios';

const TMDB_KEY = '1c4686fb63dc7e0e6d4c59ec8c5233dd';

const makeRequest = (path: string, params = {}) => {
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY
    }
  });
};

export const movieApi = {
  nowPlaying: () => makeRequest('/movie/now_playing'),
  popular: () => makeRequest('/movie/popular'),
  upcoming: () => makeRequest('/movie/upcoming', { region: 'kr' }),
  search: (query: string) => makeRequest('/search/movie', { query }),
  movie: (id: number) => makeRequest(`/movie/${id}`),
  discover: () => makeRequest('/discover/movie')
};

export const tvApi = {
  today: () => makeRequest('tv/airing_today'),
  thisWeek: () => makeRequest('tv/on_the_air'),
  topRated: () => makeRequest('tv/top_rated'),
  popular: () => makeRequest('tv/popular'),
  search: (query: string) => makeRequest('search/tv', { query }),
  show: (id: number) => makeRequest(`/tv/${id}`)
};
