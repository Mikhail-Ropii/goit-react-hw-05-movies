import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c4ff5df06d9c3bc212d0ff99e5222626';

export const getTrendFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getByName = async name => {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&${name}`);
  return response.data;
};

export const getDetailsById = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getCastById = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const getReviewsById = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};
