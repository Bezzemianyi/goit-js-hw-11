/**
 * 
 * @param {Array} arr 
 * @returns {string} 
 */

export function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${webformatURL}"
                        alt="${tags}"
                    />
                </a>
                <ul class="gallery-item-categories-menu">
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Likes</p>
                        <p class="categories-item-count">${likes}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Views</p>
                        <p class="categories-item-count">${views}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Comments</p>
                        <p class="categories-item-count">${comments}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Downloads</p>
                        <p class="categories-item-count">${downloads}</p>
                    </li>
                </ul>
            </li>
        `;
    }).join("");
}