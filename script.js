const menuEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
const hamIcon = document.querySelector(".menu")
const mobMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDeskMenu)
hamIcon.addEventListener("click", toggleMobMenu)
function toggleDeskMenu() {
    deskMenu.classList.toggle("inactive")
}
function toggleMobMenu() {
    mobMenu.classList.toggle("inactive")
}