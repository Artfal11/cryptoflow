const html = document.querySelector("html");

let burgerMenu = document.querySelector(".menu-burger"),
    burgerMenuLine = document.querySelector(".menu-burger__line"),
    menuNav = document.querySelector(".menu-nav");

burgerMenu.addEventListener("click", function() {
  burgerMenu.classList.toggle("active");
  menuNav.classList.toggle("active");
  html.classList.toggle("no-scroll");
});

let menuLink = document.querySelector(".menu-link"),
    menuLink2 = document.querySelector(".menu-link-2"),
    menuLink3 = document.querySelector(".menu-link-3"),
    menuLink4 = document.querySelector(".menu-link-4"),
    menuLink5 = document.querySelector(".menu-link-5");

menuLink.addEventListener("click", function() {
  burgerMenu.classList.remove("active");
  menuNav.classList.remove("active");
  html.classList.remove("no-scroll");
});
menuLink2.addEventListener("click", function() {
  burgerMenu.classList.remove("active");
  menuNav.classList.remove("active");
  html.classList.remove("no-scroll");
});
menuLink3.addEventListener("click", function() {
  burgerMenu.classList.remove("active");
  menuNav.classList.remove("active");
  html.classList.remove("no-scroll");
});
menuLink4.addEventListener("click", function() {
  burgerMenu.classList.remove("active");
  menuNav.classList.remove("active");
  html.classList.remove("no-scroll");
});
menuLink5.addEventListener("click", function() {
  burgerMenu.classList.remove("active");
  menuNav.classList.remove("active");
  html.classList.remove("no-scroll");
});

let mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});
