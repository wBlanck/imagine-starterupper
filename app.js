window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document.getElementById("top-header").classList.add("header--shrink");
  } else {
    document.getElementById("top-header").classList.remove("header--shrink");
  }
};

let hamburger = document.querySelector(".hamburger");
let closeMobile = document.querySelector(".close");
let mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.style.left = "0";
});
closeMobile.addEventListener("click", () => {
  mobileNav.style.left = "100%";
});
