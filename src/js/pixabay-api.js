const API_KEY = "47599452-88585afd800a8eb35bdc3af8b";
const BASE_URL = "https://pixabay.com/api/";

/**
 * 
 * @param {string} query 
 * @returns {Promise<Object>} 
 */
export function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    return fetch(`${BASE_URL}?${params}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        });
}



