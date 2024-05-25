import{a as g,S as v,i as h}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const b="43978098-d09fb7acba53d53ccd7df38b1",x="https://pixabay.com/api";g.defaults.baseURL=x;const f=(o,e=1)=>{const i=new URLSearchParams({key:b,q:o,orientation:"horizontal",image_type:"photo",safesearch:!0,page:e,per_page:15});return g.get(`?${i.toString()}`).then(r=>{if(r.status!==200)throw new Error(r.statusText);return r.data})},y=o=>o.map(({largeImageURL:e,webformatURL:i,tags:r,likes:t,views:s,comments:a,downloads:L})=>`<div>
          <a href="${e}" class="gallery-img">
          <img
          src="${i}"
          alt="${r}"
          class="gallery-img"
        />
        <div class='content'>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Likes</h3>
                <p class="text-content">${t}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Views</h3>
                <p class="text-content">${s}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Comments</h3>
                <p class="text-content">${a}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Downloads</h3>
                <p class="text-content">${L}</p>
            </div>
        </div>
      </div>`).join(""),S=15,w=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),d=document.querySelector(".js-load-more"),p=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let c=1,l="",m=0;async function P(o){if(o.preventDefault(),l=o.target.elements.searchKeyword.value.trim(),l===""){n.innerHTML="",o.target.reset(),h.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});return}n.innerHTML="",u.classList.remove("is-hidden");try{const e=await f(l,c);p.refresh(),(!e.hits||e.hits.length===0)&&h.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"}),n.insertAdjacentHTML("beforeend",y(e.hits)),m=Math.ceil(e.totalHits/S),d.classList.remove("is-hidden"),m<=1&&d.classList.add("is-hidden")}catch(e){console.log(e)}o.target.reset(),u.classList.add("is-hidden")}async function E(o){c+=1;const e=await f(l,c);n.insertAdjacentHTML("beforeend",y(e.hits)),p.refresh(),c>=e.totalHits&&(d.classList.add("is-hidden"),h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),q())}function q(){const e=containerEl.querySelector(".gallery-img").getBoundingClientRect().height,i=e*2;console.log(i),window.scrollBy({top:e,left:0,behavior:"smooth"})}w.addEventListener("submit",P);d.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
