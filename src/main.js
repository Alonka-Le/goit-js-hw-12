import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { createGalleryItemMarkup } from './js/render-functions.js';

const PER_PAGE = 15;
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.js-load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
let page = 1;
let searchQuery = '';
let totalPages = 0;

async function onSearchFormSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements.searchKeyword.value.trim();
  page = 1;
  loadMoreBtn.classList.add('is-hidden');
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
    const imagesData = await fetchPhotosByQuery(searchQuery, page);

    if (!imagesData.hits || imagesData.hits.length === 0) {
      iziToast.show({
        title: '✖',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: 'red',
        position: 'topRight',
      });
    }
    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryItemMarkup(imagesData.hits)
    );
    lightbox.refresh();
    totalPages = Math.ceil(imagesData.totalHits / PER_PAGE);
    loadMoreBtn.classList.remove('is-hidden');
    if (totalPages <= 1) {
      loadMoreBtn.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }

  event.target.reset();
  loaderEl.classList.add('is-hidden');
}

async function addPage(event) {
  page += 1;

  const imagesData = await fetchPhotosByQuery(searchQuery, page);

  galleryEl.insertAdjacentHTML(
    'beforeend',
    createGalleryItemMarkup(imagesData.hits)
  );
  lightbox.refresh();

  if (page * PER_PAGE >= imagesData.totalHits || imagesData.hits.length === 0) {
    loadMoreBtn.classList.add('is-hidden');

    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    smoothScroll();
  }
}

function smoothScroll() {
  const lastArticle = document.querySelector('.gallery-item');
  const newsArticleHeight = lastArticle.getBoundingClientRect().height;
  const scrollHeight = window.scrollY + newsArticleHeight;

  window.scrollTo({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', addPage);
