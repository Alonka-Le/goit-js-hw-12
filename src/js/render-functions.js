export const createGalleryItemMarkup = images => {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div>
          <a href="${largeImageURL}" class="gallery-img">
          <img
          src="${webformatURL}"
          alt="${tags}"
          class="gallery-img"
        />
        <div class='content'>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Likes</h3>
                <p class="text-content">${likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Views</h3>
                <p class="text-content">${views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Comments</h3>
                <p class="text-content">${comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Downloads</h3>
                <p class="text-content">${downloads}</p>
            </div>
        </div>
      </div>`
    )
    .join('');
};
