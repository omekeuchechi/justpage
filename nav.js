// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
// }

// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }
let myNav = document.getElementById("mynav")

myNav.addEventListener("mouseover", ()=>{
    myNav.style.color= "white";
    myNav.style.backgroundColor= "red";
    myNav.style.transform= "translate(290deg, 90deg)";
    myNav.style.cursor= "pointer";
    myNav.style.alignItems= "space-between";
    myNav.style.justifyContent= "center";
    myNav.style.display= "flex";
})