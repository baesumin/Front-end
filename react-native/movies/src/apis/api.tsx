import axios from 'axios';

const TMDB_KEY = '1c4686fb63dc7e0e6d4c59ec8c5233dd';

const makeRequest = (path: string, params = {}) => {
  return axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY
    }
  });
};

const getAnything = async (path: string, params = {}) => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing'),
  popular: () => getAnything('/movie/popular'),
  upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
  search: (query: string) => getAnything('/search/movie', { query }),
  movie: (id: number) => getAnything(`/movie/${id}`),
  discover: () => getAnything('/discover/movie')
};

export const tvApi = {
  today: () => getAnything('/tv/airing_today'),
  thisWeek: () => getAnything('/tv/on_the_air'),
  topRated: () => getAnything('/tv/top_rated'),
  popular: () => getAnything('/tv/popular'),
  search: (query: string) => getAnything('/search/tv', { query }),
  show: (id: number) => getAnything(`/tv/${id}`)
};
