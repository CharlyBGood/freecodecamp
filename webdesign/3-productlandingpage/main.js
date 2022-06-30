function myHumb() {
    let x = document.getElementById("nav-bar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
