import axios from 'axios';

const API_KEY = '43978098-d09fb7acba53d53ccd7df38b1';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;

export const fetchPhotosByQuery = (query, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    page,
    per_page: 15,
  });

  return axios.get(`?${searchParams.toString()}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  });
};
