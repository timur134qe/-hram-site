const names=["Фото 1","Фото 2","Фото 3","Фото 4","Фото 5","Фото 6","Фото 7","Фото 8"];
const photo=document.getElementById("photo"), caption=document.getElementById("caption");
function show(i){
  photo.src=`images/foto${i+1}.jpg`; photo.alt=names[i]; caption.textContent=names[i];
  document.querySelectorAll(".photo-tabs button").forEach((b,n)=>b.classList.toggle("active",n===i));
}
document.querySelectorAll(".photo-tabs button,.thumbs img").forEach(el=>el.addEventListener("click",()=>show(Number(el.dataset.photo))));
document.getElementById("hamb").onclick=()=>{const n=document.getElementById("nav");n.style.display=n.style.display==="flex"?"none":"flex"};
