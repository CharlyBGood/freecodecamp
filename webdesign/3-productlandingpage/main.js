let toggleBtn = document.getElementsByClassName("navbar_toggle")[0];
let navbar = document.getElementById("nav-bar");
let links = document.querySelectorAll(".nav-link");

links.forEach((link) =>
  link.addEventListener("click", () => {    
    toggleBtn.style.display = "flex";
    navbar.classList.remove("responsive")    
  })
);

toggleBtn.addEventListener("click", () => {
  navbar.className += " responsive";
  toggleBtn.style.display = "none";
});

let call = document.getElementById("call");
call.addEventListener("click", () => {
  alert("Gracias por fingir que nos estas llamando!");
});
