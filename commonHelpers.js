import{a as m,S as v,i as d}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const x="43978098-d09fb7acba53d53ccd7df38b1",b="https://pixabay.com/api";m.defaults.baseURL=b;const f=(r,t=1)=>{const i=new URLSearchParams({key:x,q:r,orientation:"horizontal",image_type:"photo",safesearch:!0,page:t,per_page:15});return m.get(`?${i.toString()}`).then(o=>{if(o.status!==200)throw new Error(o.statusText);return o.data})},g=r=>r.map(({largeImageURL:t,webformatURL:i,tags:o,likes:e,views:s,comments:a,downloads:L})=>`<div>
          <a href="${t}" class="gallery-img">
          <img
          src="${i}"
          alt="${o}"
          class="gallery-img"
        />
        <div class='content'>
            <div class="item-list-info-text">
                <h3 class="text-content-title">Likes</h3>
                <p class="text-content">${e}</p>
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
      </div>`).join(""),P=15,S=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),p=document.querySelector(".js-load-more"),y=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let l=1,c="",h=0;async function w(r){if(r.preventDefault(),c=r.target.elements.searchKeyword.value.trim(),c===""){n.innerHTML="",r.target.reset(),d.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});return}n.innerHTML="",u.classList.remove("is-hidden");try{const t=await f(c,l);y.refresh(),(!t.hits||t.hits.length===0)&&d.show({title:"✖",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"}),n.innerHTML=g(t.hits),h=Math.ceil(t.totalHits/P),h>1&&p.classList.remove("is-hidden")}catch(t){console.log(t)}r.target.reset(),u.classList.add("is-hidden")}async function E(r){const t=await f(c,l);n.innerHTML=g(t.hits),l+=1,y.refresh()}S.addEventListener("submit",w);p.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
