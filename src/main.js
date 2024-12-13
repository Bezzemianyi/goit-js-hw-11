import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { createMarkup } from "./js/render-functions.js";
const form = document.querySelector(".search-form")
const input = document.querySelector(".search-input")
const galleryMenu = document.querySelector(".gallery")

form.addEventListener("submit", handleSearch)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function handleSearch(event) {
    event.preventDefault();
    const trimValid = input.value.trim();

    if (!trimValid) {
        iziToast.error({
            title: "Error",
            message: "Please enter a keyword to search.",
            position: "topRight",
        });
        return;
    }

    iziToast.info({
        id: 'loading-toast',
        title: 'Loading',
        message: 'Fetching images, please wait...',
        position: 'topRight',
        timeout: false,
        close: false,
    });

    fetchImages(trimValid)
        .then((data) => {
            if (!data.hits.length) {
                galleryMenu.innerHTML = ""; 
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
                return;
            }
            galleryMenu.innerHTML = createMarkup(data.hits);
            lightbox.refresh(); 
        })
        .catch((error) => {
            console.error(error);
            iziToast.error({
                title: "Error",
                message: "An error occurred while fetching images. Please try again later.",
                position: "topRight",
            });
        })
        .finally(() => {
            form.reset();
            iziToast.hide({ id: 'loading-toast' });
        });
}
