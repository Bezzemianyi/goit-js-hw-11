import{i as l,S as n}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const m="47599452-88585afd800a8eb35bdc3af8b",u="https://pixabay.com/api/",g=document.querySelector(".search-form"),p=document.querySelector(".search-input"),f=document.querySelector(".gallery");g.addEventListener("submit",d);function d(s){s.preventDefault();const i=p.value.trim();if(console.log(i),!i){l.error({title:"Error",message:"Please enter a keyword to search.",position:"topRight"});return}l.info({id:"loading-toast",title:"Loading",message:"Fetching images, please wait...",position:"topRight",timeout:!1,close:!1}),o(i);function o(r){const t=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`${u}?${t}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{e.hits.length||l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f.innerHTML=h(e.hits)}).catch(e=>console.log(e)).finally(()=>{s.target.reset(),l.hide({id:"loading-toast"})})}}function h(s){return s.map(({webformatURL:i,largeImageURL:o,tags:r,likes:t,views:e,comments:a,downloads:c})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img
            class="gallery-image"
            src="${i}"
            alt="${r}"
         />
        </a>
        <ul class="gallery-item-categories-menu">
            <li class="gallery-item-categories-menu-item">
                <p class="categories-item-title">Likes</p>
                <p class="categories-item-count">${t}</p>
            </li>
            <li class="gallery-item-categories-menu-item">
                <p class="categories-item-title">Views</p>
                <p class="categories-item-count">${e}</p>
            </li>
            <li class="gallery-item-categories-menu-item">
                <p class="categories-item-title">Comments</p>
                <p class="categories-item-count">${a}</p>
            </li>
            <li class="gallery-item-categories-menu-item">
                <p class="categories-item-title">Downloads</p>
                <p class="categories-item-count">${c}</p>
            </li>
        </ul>
        </li>
    `).join("")}new n(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
