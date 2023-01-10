(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const g="/button-game/assets/goggles-png-027d4e5b.png";document.querySelector("#app").innerHTML=`
	<div id="cursor" class="flex-center">
		<span id="cursor-span"></span>
		<span id="cursor-span"></span>
		<span id="cursor-span"></span>
		<span id="cursor-span"></span>
	</div>
	<p id="point">Points: 0</p>
	<label for="checkbox" id="checkboxlabel">
		<input type="checkbox" id="autoplay" />
		Autoplay ( no points, background changing )
	</label>
	<button class="randomized animate__animated">
		<img src="${g}" alt="Goggles" width="100" height="100" />
	</button>
`;const c=document.querySelector("#cursor"),i=document.querySelector(".randomized"),m=document.querySelector("#point"),d=document.querySelector("#autoplay");let u;document.onmousemove=r=>{const t=r.clientX-c.clientWidth/2,n=r.clientY-c.clientHeight/2,s=t/window.innerWidth*100,e=n/window.innerHeight*100;c.style.left=`${s}%`,c.style.top=`${e}%`};i.addEventListener("click",l);d.onchange=()=>{if(!d.checked){clearInterval(u);return}u=setInterval(()=>{l(!1)},1e3)};function l(r){let t=parseInt(parseInt(Math.random()*window.innerWidth)/window.innerWidth*100),n=parseInt(parseInt(Math.random()*window.innerHeight)/window.innerHeight*100);t>90?t-=10:t<10&&(t+=10),n>90?n-=10:n<10&&(n+=10),i.classList.toggle("animate__flash",!0),setTimeout(()=>{i.classList.toggle("animate__flash",!1)},1500),i.style.left=`${t}%`,i.style.top=`${n}%`,r!==!1&&(f(),h())}function f(){const r=parseInt(Math.random()*255),t=parseInt(Math.random()*255),n=parseInt(Math.random()*255),s=[r,t,n].join(", ");document.body.style.backgroundColor=`rgb(${s})`}let p=-1;function h(){p++;const r=`Points: ${p}`;m.innerText=r}l();f();
