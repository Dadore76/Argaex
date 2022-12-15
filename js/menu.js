const hamburguerIcon = document.querySelector(".nav_hamburguer");
const navOverlay = document.querySelector(".nav_overlay")

hamburguerIcon.addEventListener("click", () => {
    hamburguerIcon.classList.toggle("nav_hamburguer-open");
    navOverlay.classList.toggle("nav_overlay-show")
})
