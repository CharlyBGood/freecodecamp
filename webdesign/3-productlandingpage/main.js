// function myHumb() {
//   let x = document.getElementById("nav-bar");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

let toggleBtn = document.getElementsByClassName("navbar_toggle")[0];
let navbar = document.getElementById("nav-bar");
let links = document.querySelectorAll(".nav-link");

links.forEach(link => link.addEventListener("click", ()=> {
    navbar.classList.remove("responsive")
    toggleBtn.style.display = "flex"
    console.log("clicked link")
}))


toggleBtn.addEventListener("click", () => {
    console.log("yes")
    x.className += " responsive"
    toggleBtn.style.display = "none"    
})   


let call = document.getElementById("call");
call.addEventListener("click", () => {
  alert("Gracias por fingir que nos estas llamando!");
});
