let nav = document.getElementsByTagName("nav")[0];
const hamburger = document.querySelector(".hamburger");
const ul = document.getElementsByTagName("ul")[0];


window.addEventListener("scroll", ()=>{
if(window.scrollY>100){
    nav.style.background = "rgba(0, 0, 0, .8)";
}
if(window.scrollY<100){
    nav.style.background = "rgba(0, 0, 0, .3)";
}
})

hamburger.addEventListener("click", ()=>{
    ul.classList.toggle("show");
});