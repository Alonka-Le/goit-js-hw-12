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

// export const fetchPhotosByQuery = (q, page) => {
//   return axios
//     .get(
//       `/?key=${API_KEY}&q=${q}&image_type=photo&safesearch=true&orientation=horizontal&page=${page}&per_page=15`
//     )
//     .then(response => response.data.hits)
//     .catch(error => console.error(error));
// };
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: 'name',
// });

// fetchPhotosByQuery()
//   .then(({ response }) => {
//     console.log(data);
//   })
//   .catch(error => {
//     if (error.response) {
//       throw new Error(error.response.statusText);
//     }
//   });
