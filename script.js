const menuEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDeskMenu)
function toggleDeskMenu(menu) {
    deskMenu.classList.toggle("inactive")
}