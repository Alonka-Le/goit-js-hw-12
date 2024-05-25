import iziToast from 'izitoast';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { createGalleryItemMarkup } from './js/render-functions.js';
import {
  searchQuery,
  galleryEl,
  loaderEl,
  page,
  lightbox,
  totalPages,
  PER_PAGE,
  loadMoreBtn,
} from './main.js';

export async function onSearchFormSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements.searchKeyword.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.show({
      title: '✖',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      position: 'topRight',
    });
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  try {
    const { data } = await fetchPhotosByQuery(searchQuery, page);

    lightbox.refresh();
    if (!data.hits || data.hits.length === 0) {
      iziToast.show({
        title: '✖',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: 'red',
        position: 'topRight',
      });
    }

    galleryEl.innerHTML = createGalleryItemMarkup(data.hits);
    totalPages = Math.ceil(data.totalHits / PER_PAGE);
    createGalleryItemMarkup(data);
    if (totalPages > 1) {
      loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }

  event.target.reset();
  loaderEl.classList.add('is-hidden');
}
