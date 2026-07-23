/* ==========================
   VISIORA ADS
   script.js
========================== */

// Səhifə yüklənəndə animasiya
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Düymələr üçün yumşaq klik effekti
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";
        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

// Scroll animasiyası
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".social a, .catalog-box").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";
    observer.observe(el);
});

// Header mətni yazılma effekti
const title = document.querySelector("h1");

const text = title.innerText;

title.innerHTML = "";

let i = 0;

function typing() {

    if (i < text.length) {

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 80);

    }

}

typing();

// Logo hover effekti

const logo = document.querySelector(".logo img");

logo.addEventListener("mousemove", () => {

    logo.style.transform = "scale(1.05) rotate(-2deg)";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "scale(1)";

});

// Kataloq mövcud deyilsə xəbərdarlıq

const pdfButton = document.querySelector('#catalog a');

pdfButton.addEventListener("click", function(e){

    if(this.getAttribute("href") === "assets/catalog.pdf"){

        console.log("Kataloq əlavə ediləcək.");

    }

});

// Footer-də ili avtomatik yenilə

const footer = document.querySelector("footer");

footer.innerHTML = "© " + new Date().getFullYear() + " VISIORA ADS";

// Telefon nömrəsinə klik statistikası

const phone = document.querySelector('a[href^="tel"]');

phone.addEventListener("click", ()=>{

    console.log("Telefon düyməsinə klik edildi.");

});

// WhatsApp statistikası

const whatsapp = document.querySelector('a[href*="wa.me"]');

whatsapp.addEventListener("click", ()=>{

    console.log("WhatsApp açıldı.");

});

console.log("VISIORA ADS Website Loaded Successfully");
