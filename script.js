const menuEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
const hamIcon = document.querySelector(".menu")
const mobMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".cartIcon")
const cartMenu = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDeskMenu)
function toggleDeskMenu() {
    const isCartOpen = !cartMenu.classList.contains("inactive")
    if (isCartOpen) {
        cartMenu.classList.add("inactive")
    }
    deskMenu.classList.toggle("inactive")
}

hamIcon.addEventListener("click", toggleMobMenu)
function toggleMobMenu() {
    const isCartOpen = !cartMenu.classList.contains("inactive")
    if (isCartOpen) {
        cartMenu.classList.add("inactive")
    }
    mobMenu.classList.toggle("inactive")
}

cartIcon.addEventListener("click", togglecartMenu)
function togglecartMenu() {
    const isMobOpen = !mobMenu.classList.contains("inactive")
    const isDeskMenuOpen = !deskMenu.classList.contains("inactive")
    if (isMobOpen) {
        mobMenu.classList.add("inactive")
    }
    if (isDeskMenuOpen) {
        deskMenu.classList.add("inactive")
    }
    cartMenu.classList.toggle("inactive")
}