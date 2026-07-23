/* ===================================
   VISIORA ADS FlipBook
=================================== */

document.addEventListener("DOMContentLoaded", function () {

const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: 450,
        height: 650,

        size: "stretch",

        minWidth: 300,
        maxWidth: 1000,

        minHeight: 420,
        maxHeight: 1400,

        maxShadowOpacity: 0.5,

        showCover: true,

        mobileScrollSupport: true,

        useMouseEvents: true,

        flippingTime: 700,

        swipeDistance: 30,

        autoSize: true
    }
);

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);

/* Buttons */

document
.getElementById("next")
.addEventListener("click",()=>{

pageFlip.flipNext();

});

document
.getElementById("prev")
.addEventListener("click",()=>{

pageFlip.flipPrev();

});

/* Page Counter */

const counter=document.getElementById("page-num");

pageFlip.on("flip",(e)=>{

counter.innerHTML=(e.data+1)+" / 28";

});

/* Keyboard */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

pageFlip.flipNext();

}

if(e.key==="ArrowLeft"){

pageFlip.flipPrev();

}

});

/* Double Click Fullscreen */

const book=document.getElementById("book");

book.addEventListener("dblclick",()=>{

if(!document.fullscreenElement){

book.requestFullscreen();

}else{

document.exitFullscreen();

}

});

});
