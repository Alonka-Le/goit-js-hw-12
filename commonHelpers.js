import{a as g,S as b,i as h}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const x="43978098-d09fb7acba53d53ccd7df38b1",S="https://pixabay.com/api";g.defaults.baseURL=S;const f=(o,e=1)=>{const r=new URLSearchParams({key:x,q:o,orientation:"horizontal",image_type:"photo",safesearch:!0,page:e,per_page:15});return g.get(`?${r.toString()}`).then(i=>i.data)},p=o=>o.map(({largeImageURL:e,webformatURL:r,tags:i,likes:t,views:s,comments:a,downloads:v})=>`<div>
          <a href="${e}" class="gallery-img">
          <img
          src="${r}"
          alt="${i}"
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
                <p class="text-content">${v}</p>
            </div>
        </div>
      </div>`).join(""),y=15,w=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more"),L=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let c=1,d="",m=0;async function P(o){if(o.preventDefault(),d=o.target.elements.searchKeyword.value.trim(),c=1,n.classList.add("is-hidden"),d===""){l.innerHTML="",o.target.reset(),h.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});return}l.innerHTML="",u.classList.remove("is-hidden");try{const e=await f(d,c);(!e.hits||e.hits.length===0)&&h.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"}),l.insertAdjacentHTML("beforeend",p(e.hits)),L.refresh(),m=Math.ceil(e.totalHits/y),n.classList.remove("is-hidden"),m<=1&&n.classList.add("is-hidden")}catch(e){console.log(e)}o.target.reset(),u.classList.add("is-hidden")}async function E(o){c+=1;const e=await f(d,c);l.insertAdjacentHTML("beforeend",p(e.hits)),L.refresh(),(c*y>=e.totalHits||e.hits.length===0)&&(n.classList.add("is-hidden"),h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),q())}function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height,r=window.scrollY+e;window.scrollTo({top:r,left:0,behavior:"smooth"})}w.addEventListener("submit",P);n.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
