const landingPhoto = document.querySelector(".landing-photo");

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    landingPhoto.src = "./assets/images/image-web-3-mobile.jpg";
  } else {
    landingPhoto.src = "./assets/images/image-web-3-desktop.jpg";
  }
});

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.remove("hidden");
});

const iconClose = document.querySelector(".icon-close");

iconClose.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.add("hidden");
});
