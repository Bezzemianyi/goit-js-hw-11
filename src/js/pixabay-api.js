import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "47599452-88585afd800a8eb35bdc3af8b";
const BASE_URL = "https://pixabay.com/api/"
const form = document.querySelector(".search-form")
const input = document.querySelector(".search-input")
const galleryMenu = document.querySelector(".gallery-menu")
form.addEventListener("submit", handleSearch)


function handleSearch(event) {
    event.preventDefault();
    const trimValid = input.value.trim();
    console.log(trimValid);
    if (!trimValid) {
        iziToast.error({
            title: "Error",
            message: "Please enter a keyword to search.",
            position: "topRight",
        })
        return;
    }
    
    fetchImages(trimValid)

    function fetchImages(trimValid) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: trimValid,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    })

    fetch(`${BASE_URL}?${params}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((data) => {
            if (!data.hits.length) {
                iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
        }) 
            }
            console.log(data);
            galleryMenu.innerHTML = createMarkup(data.hits);
        })
        .catch(error => console.log(error))
}
}

function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        `
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
    `
        
    }).join("")
}



