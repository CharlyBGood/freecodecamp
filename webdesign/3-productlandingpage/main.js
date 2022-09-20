let toggleBtn = document.getElementsByClassName("navbar_toggle")[0];
let navbar = document.getElementById("nav-bar");
let links = document.querySelectorAll(".nav-link");

links.forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("responsive");
    toggleBtn.style.display = "flex";
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
