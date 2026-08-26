window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").style.opacity="0",350));
setTimeout(()=>document.getElementById("loader").remove(),900);
const nav=document.querySelector("nav"), menu=document.querySelector(".menu-btn");
menu.onclick=()=>nav.style.display=nav.style.display==="flex"?"none":"flex";
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>{if(innerWidth<701)nav.style.display="none"});
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2800)}
document.getElementById("secretBtn").onclick=()=>toast("🤫 Ты нашёл секретную кнопку храма!");
document.getElementById("loreBtn").onclick=()=>toast("👹 Тайна: ЗЛОЙ ВИТЯ всё ещё живёт здесь...");
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="v")toast("👹 Код Вити активирован")});
