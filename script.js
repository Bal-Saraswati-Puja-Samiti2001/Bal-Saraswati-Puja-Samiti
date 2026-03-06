const data = {
 "2025": {
  members:["अध्यक्ष: दिनेश साह","कोषाध्यक्ष: रौशन कुमार साह","सचिव: रंधीर कुमार साह"],
  

  rural_total: 75441,   // ✅ सही verified कुल

  collection: {},       // 🚫 tola-wise अभी blank

  kamiti:107683,
  lucky_draw:6400,
  kalash:11800,
  mahaprashad:4453,

  expense:{"मूर्ति":10610,"टेंट":71500,"फूल":21000,"सेट्रींग":3300,"पाग + डोपता + रिबन":650,"पित्तल घड़ा + अबीर + चूना":5450,"गेंदा फूल + माला":660,"डीजल":1815,"मिट्टी कलश":2100,"संकल्प हेतु":1374,"दक्षिणा":4100,"खाना + नाश्ता(टेंट + थाना स्टाफ)":1520,"फल":670,"कॉपी + पेन":895,"बैनर + कार्ड":1250,"जंगली बादशाह":22000,"महाकाल जागरण":23500,"पेट्रोल(कार्यक्रम हेतु)":160,"फटाका":1000,"सांस्कृतिक कार्यक्रम":10500,"महाप्रसाद मे":420,"भाड़ा(भासान हेतु)":500,"किराना":8000,"लाल कपड़ा + धोती ":2900,"भगवान पूजा हेतु":1832,"नारियल + पूजा सामग्री":4200,"अन्य खर्च":3441}
 },
 "2026": {
  members:["अध्यक्ष: दिनेश साह", "कोषाध्यक्ष: सुरेन्द्र कुमार साह", "सचिव: रंधीर कुमार साह"],
   rural_total: 67546,   // ✅ सही verified कुल

  collection: {},       // 🚫 tola-wise अभी blank

  kamiti:84783,
  lucky_draw:3200,
  kalash:8100,
  mahaprashad: 0,
  mahaprashad_note: "सभी व्यक्तिगत सहयोग से",


  expense:{"मूर्ति (दाता)": 11000,"टेंट": 42500,"सजावट": 11000,"सेट्रींग":6000,"पाग + डोपता + रिबन + माला":950,"लकी ड्रॉ सामग्री": 3440 ,"विद्यार्थी सम्मान समारोह": 2880,"अबीर + चूना":1130 ,"गेंदा फूल":500 ,"डीजल + पेट्रोल":1020,"मिट्टी कलश + दीप":2000,"संकल्प हेतु":1002 ,"दक्षिणा":5101 ,"खाना + नाश्ता(टेंट + थाना स्टाफ)":908,"फल":550 ,"सांस्कृतिक ढोल":1500,"बैनर + कार्ड":1690,"जंगली बादशाह":22500,"महाकाल रोड झांकी":15720 ,"सांस्कृतिक कार्यक्रम":12000 ,"फटाका + स्प्रे":2000,"भाड़ा(भासान हेतु)":1000,"किराना":6748 ,"लाल कपड़ा + गमछा ":1950 ,"नारियल + पूजा सामग्री":4391,"अन्य खर्च":4137} }
 };

const yearPhotos = {
 "2025":["2025/img1.jpg","2025/img2.jpg","2025/img3.jpg","2025/img4.jpg","2025/img5.jpg","2025/img6.jpeg","2025/img7.jpeg","2025/img8.jpeg"],
 "2026":["2026/img1.jpeg","2026/img2.jpeg","2026/img3.jpg","2026/img4.jpg","2026/img5.jpg","2026/img6.jpg","2026/img7.jpg","2026/img8.jpg","2026/img9.jpg","2026/img10.jpg","2026/img11.jpg","2026/img12.jpg","2026/img13.jpg"],
};

const chiefGuest = {
 "2025": {name:"तत्कालीन थानाध्यक्ष(सकरी थाना) ", img:"guest/2025.jpg"},
 "2026": {
  name: "BDO (रहिका प्रखण्ड)",
  img: "guest/2026.jpeg"
}

};

function loadYear(){
  
  
 const year = document.getElementById("yearSelect").value;
 document.querySelectorAll(".year-image").forEach(img => {

  if(year === "2025"){
    img.style.display = "none";
  }
  else{
    img.style.display = "inline-block";
  }

});
 document.querySelector(".contact-section").style.display="none";
 

 const guestContainer = document.getElementById("guestContainer");
 const guestImage = document.getElementById("guestImage");
 const guestCaption = document.getElementById("guestCaption");
 

 document.getElementById("members").innerHTML="";
 document.getElementById("collection").innerHTML="";
 document.getElementById("expense").innerHTML="";
 document.getElementById("summary").innerHTML="";
 const photosBox = document.getElementById("photos");
 const grid = photosBox.querySelector(".photo-grid");
 grid.innerHTML="";
 photosBox.style.display="none";

 document.querySelectorAll(".jubilee").forEach(j=>j.classList.remove("show"));
 document.querySelectorAll(".confetti").forEach(c=>c.remove());

 if(!year) return;

 if(chiefGuest[year]){
  guestContainer.style.display="block";
  guestImage.src = chiefGuest[year].img;
  guestCaption.textContent = "मुख्य अतिथि: " + chiefGuest[year].name;
 } else {
  guestContainer.style.display="none";
 }
 if(year==="2025"){
  document.querySelectorAll(".jubilee").forEach(j=>j.classList.add("show"));

  // Fireworks
  const fw = document.createElement("div"); fw.className="fireworks"; document.body.appendChild(fw);
  const colors = ["#ff1744","#ffea00","#00e676","#2979ff","#ff9100"];
  const interval = setInterval(()=>{
    const cx=Math.random()*window.innerWidth;
    const cy=Math.random()*window.innerHeight*0.6;
    for(let i=0;i<30;i++){
      const s=document.createElement("span");
      s.className="spark";
      s.style.left=cx+"px"; s.style.top=cy+"px";
      s.style.background=colors[Math.floor(Math.random()*colors.length)];
      const angle=Math.random()*Math.PI*2, dist=Math.random()*120+40;
      s.style.setProperty("--x",Math.cos(angle)*dist+"px");
      s.style.setProperty("--y",Math.sin(angle)*dist+"px");
      fw.appendChild(s);
    }
  },600);
  setTimeout(()=>{ clearInterval(interval); fw.style.opacity="0"; },5000);
  setTimeout(()=>{ fw.remove(); },6000);

  // Confetti
  const conf = document.createElement("div"); conf.className="confetti";
  for(let i=0;i<90;i++){
    const s=document.createElement("span");
    s.style.left=Math.random()*100+"%";
    s.style.background=["gold","#ff5252","#4caf50","#42a5f5"][Math.floor(Math.random()*4)];
    s.style.animationDelay=Math.random()*2+"s";
    conf.appendChild(s);
  }
  document.body.appendChild(conf);
  setTimeout(()=>{ conf.style.opacity="0"; },5000);
  setTimeout(()=>{ conf.remove(); },6000);
 }

 const d=data[year];

 document.getElementById("members").innerHTML=`<h2>👥 चयनित समिति सदस्य (${year})</h2>${d.members.map(m=>`<p>${m}</p>`).join("")}`;

 //let g=0, rows="";
 //for(let k in d.collection){ g+=d.collection[k]; rows+=`<div class="row"><span>${k}</span><span>₹${d.collection[k]}</span></div>`;}
 let rows = "";
let g = d.rural_total || 0;

if(d.collection && Object.keys(d.collection).length > 0){
  for(let k in d.collection){
    rows += `<div class="row">
              <span>${k}</span>
              <span>₹${d.collection[k]}</span>
            </div>`;
  }
}
// else कुछ भी नहीं दिखेगा

 document.getElementById("collection").innerHTML=`<h2>💰 चंदा विवरण</h2>${rows}<div class="row bold"><span>ग्रामीण कुल</span><span>₹${g}</span></div><div class="row bold"><span>कमिटी</span><span>₹${d.kamiti}</span></div><div class="row bold"><span>लकी ड्रॉ</span><span>₹${d.lucky_draw}</span></div><div class="row bold"><span>कलश</span><span>₹${d.kalash}</span></div>
<div class="row bold">
  <span>महाप्रसाद</span>
  <span>
    ${d.mahaprashad_note ? d.mahaprashad_note : "₹"+d.mahaprashad}
  </span>
</div>
`;

 let e=0, exp="";
 for(let k in d.expense){ e+=d.expense[k]; exp+=`<div class="row"><span>${k}</span><span>₹${d.expense[k]}</span></div>`;}
 document.getElementById("expense").innerHTML=`<h2>🧾 खर्च</h2>${exp}<div class="row bold"><span>कुल खर्च</span><span>₹${e}</span></div>`;

 const total=g+d.kamiti+d.lucky_draw+d.kalash+d.mahaprashad;
 document.getElementById("summary").innerHTML=`<div class="summary"><div class="box green">कुल संग्रह<br>₹${total}</div><div class="box red">कुल व्यय<br>₹${e}</div><div class="box blue">बचत<br>₹${total-e}</div></div>`;

 if(yearPhotos[year]){
  yearPhotos[year].forEach(src=>{
   const img=document.createElement("img");
   img.src=src;
   img.onclick=()=>openLightbox(src);
   grid.appendChild(img);
  });
  photosBox.style.display="block";

 let pos = 0;

if(window.photoScroll){
  clearInterval(window.photoScroll);
}

window.photoScroll = setInterval(() => {
  pos += 0.5;   // slow smooth scroll
  grid.scrollLeft = pos;

  if (pos >= grid.scrollWidth - grid.clientWidth) {
    pos = 0;
    grid.scrollTo({ left: 0, behavior: "auto" });
  }

}, 20);
 }
}

function openLightbox(src){
 const box=document.createElement("div");
 box.className="lightbox";
 box.innerHTML=`<span onclick="this.parentElement.remove()">✖</span><img src="${src}">`;
 document.body.appendChild(box);
}
function openNotice(){
  const box = document.createElement("div");
  box.className = "notice-lightbox";

  const img = document.createElement("img");
  img.src = "images/vidyarthi_samman_samaroh.jpg";

  let scale = 1;
  let posX = 0, posY = 0;
  let startX = 0, startY = 0;
  let isDragging = false;

  const minScale = 1;
  const maxScale = 3;

  function updateTransform(){
    img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  /* 🖱️ DESKTOP DRAG */
  img.addEventListener("mousedown", (e)=>{
    if(scale === 1) return;
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    img.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e)=>{
    if(!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener("mouseup", ()=>{
    isDragging = false;
    img.style.cursor = "grab";
  });

  /* 🖱️ MOUSE WHEEL ZOOM */
  img.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scale += e.deltaY < 0 ? 0.15 : -0.15;
    scale = Math.min(Math.max(scale, minScale), maxScale);
    updateTransform();
  }, { passive:false });

  /* 👆 CLICK TO TOGGLE ZOOM */
  img.onclick = (e)=>{
    e.stopPropagation();
    scale = scale === 1 ? 2 : 1;
    posX = posY = 0;
    updateTransform();
  };

  /* 📱 MOBILE DRAG + PINCH */
  let startDist = 0;

  img.addEventListener("touchstart", (e)=>{
    if(e.touches.length === 1){
      isDragging = true;
      startX = e.touches[0].clientX - posX;
      startY = e.touches[0].clientY - posY;
    }
    if(e.touches.length === 2){
      startDist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
    }
  }, { passive:false });

  img.addEventListener("touchmove", (e)=>{
    e.preventDefault();

    if(e.touches.length === 1 && isDragging && scale > 1){
      posX = e.touches[0].clientX - startX;
      posY = e.touches[0].clientY - startY;
    }

    if(e.touches.length === 2){
      const newDist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      scale += (newDist - startDist) / 200;
      scale = Math.min(Math.max(scale, minScale), maxScale);
      startDist = newDist;
    }

    updateTransform();
  }, { passive:false });

  img.addEventListener("touchend", ()=>{
    isDragging = false;
  });

  /* ❌ CLOSE */
  box.onclick = ()=> box.remove();

  const close = document.createElement("span");
  close.innerHTML = "✖";
  close.onclick = (e)=>{
    e.stopPropagation();
    box.remove();
  };

  box.appendChild(close);
  box.appendChild(img);
  document.body.appendChild(box);

  img.style.cursor = "grab";
}
window.addEventListener("scroll", function(){

const contact = document.querySelector(".contact-section");

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-5) {

contact.style.display = "flex";

}

});