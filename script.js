/* ===================================
   VISIORA ADS
   Premium Script v2
=================================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* ==========================
   Scroll Animation
========================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(".social a,.catalog-box").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s ease";

observer.observe(el);

});

/* ==========================
   Typing Effect
========================== */

const title=document.querySelector("h1");

if(title){

const text=title.innerText;

title.innerHTML="";

let i=0;

(function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

})();

}

/* ==========================
   Button Click Animation
========================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.96)";

setTimeout(()=>{

btn.style.transform="";

},150);

});

});

/* ==========================
   Floating Logo
========================== */

const logo=document.querySelector(".logo img");

if(logo){

logo.addEventListener("mousemove",()=>{

logo.style.transform="scale(1.04) rotate(-2deg)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="scale(1)";

});

}

/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================
   Navbar Shadow (Future)
========================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.transition=".4s";

}

});

/* ==========================
   Footer Year
========================== */

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" VISIORA ADS";

}

/* ==========================
   WhatsApp Pulse
========================== */

const wa=document.querySelector(".floating-whatsapp");

if(wa){

setInterval(()=>{

wa.animate([

{transform:"scale(1)"},

{transform:"scale(1.12)"},

{transform:"scale(1)"}

],{

duration:1200

});

},4000);

}

/* ==========================
   Console
========================== */

console.log("%cVISIORA ADS","font-size:20px;color:#ff7b00;font-weight:bold;");
console.log("Website Loaded Successfully");
