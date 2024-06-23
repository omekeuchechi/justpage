let slide = document.querySelectorAll(".container h1 .content .fa-video-camera");
let show = document.querySelector("fa-hacker-news-square");



slide.addEventListiner("load", ()=>{
    slide.style.transform = "translate(20px)";
},1000)