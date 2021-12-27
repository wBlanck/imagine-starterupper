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

/* hamburger.addEventListener("click", () => {
  mobileNav.style.left = "0";
});
closeMobile.addEventListener("click", () => {
  mobileNav.style.left = "100%";
});

gsap.from(".hero .container .hero__img", {
  alpha: 0,
  duration: 1.5,
  delay: 0.2,
});
gsap.from(".hero .container .hero__content > *", {
  alpha: 0,
  duration: 1,
  stagger: 0.3,
  delay: 0.2,
  ease: "power1.out",
});
 */
