import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="47599452-88585afd800a8eb35bdc3af8b",p="https://pixabay.com/api/";function f(s){const i=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(s){return s.map(({webformatURL:i,largeImageURL:r,tags:l,likes:e,views:t,comments:o,downloads:m})=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${i}"
                        alt="${l}"
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
                        <p class="categories-item-count">${o}</p>
                    </li>
                    <li class="gallery-item-categories-menu-item">
                        <p class="categories-item-title">Downloads</p>
                        <p class="categories-item-count">${m}</p>
                    </li>
                </ul>
            </li>
        `).join("")}const c=document.querySelector(".search-form"),d=document.querySelector(".search-input"),n=document.querySelector(".gallery");c.addEventListener("submit",L);const y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){s.preventDefault();const i=d.value.trim();if(!i){a.error({title:"Error",message:"Please enter a keyword to search.",position:"topRight"});return}a.info({id:"loading-toast",title:"Loading",message:"Fetching images, please wait...",position:"topRight",timeout:!1,close:!1}),f(i).then(r=>{if(!r.hits.length){n.innerHTML="",a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.innerHTML=h(r.hits),y.refresh()}).catch(r=>{console.error(r),a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{c.reset(),a.hide({id:"loading-toast"})})}
//# sourceMappingURL=index.js.map
