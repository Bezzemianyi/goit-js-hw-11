import{S as g,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="47599452-88585afd800a8eb35bdc3af8b",d="https://pixabay.com/api/";function f(o){const i=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(o){return o.map(({webformatURL:i,largeImageURL:r,tags:a,likes:e,views:t,comments:s,downloads:m})=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${i}"
                        alt="${a}"
                    />
                </a>
                <ul class="gallery-item-categories-menu">
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Likes</p>
                        <p class="categories-item-count">${e}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Views</p>
                        <p class="categories-item-count">${t}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Comments</p>
                        <p class="categories-item-count">${s}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Downloads</p>
                        <p class="categories-item-count">${m}</p>
                    </li>
                </ul>
            </li>
        `).join("")}const u=document.querySelector(".search-form"),y=document.querySelector(".search-input"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");u.addEventListener("submit",w);const L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function w(o){o.preventDefault();const i=y.value.trim();if(!i){n.error({title:"Error",message:"Please enter a keyword to search.",position:"topRight"});return}S(),c.innerHTML="",f(i).then(r=>{if(!r.hits.length){c.innerHTML="",n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=h(r.hits),L.refresh()}).catch(r=>{console.error(r),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{u.reset(),b()})}function S(){l.textContent="Loading images, please wait...",l.classList.remove("hidden")}function b(){l.classList.add("hidden")}
//# sourceMappingURL=index.js.map
