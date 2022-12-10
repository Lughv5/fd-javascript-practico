const menuEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
const hamIcon = document.querySelector(".menu")
const mobMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".cartIcon")
const cartMenu = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")
const productDetailConteiner = document.querySelector(".product-detail2")
const productDetailClose = document.querySelector(".product-detail2-close")
const productList = []

// seccion de menus
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
    closeDetails()
    mobMenu.classList.toggle("inactive")
}

cartIcon.addEventListener("click", togglecartMenu)
function togglecartMenu() {
    const isMobOpen = !mobMenu.classList.contains("inactive")
    const isDeskMenuOpen = !deskMenu.classList.contains("inactive")
    const isProductDetailOpen = !productDetailConteiner.classList.contains("inactive")
    
    if (isMobOpen) {
        mobMenu.classList.add("inactive")
    }
    if (isDeskMenuOpen) {
        deskMenu.classList.add("inactive")
    }
    if (isProductDetailOpen) {
        productDetailConteiner.classList.add("inactive")
    }
    cartMenu.classList.toggle("inactive")
}
function openProductDetail() {
    const isCartOpen = !cartMenu.classList.contains("inactive")
    if (isCartOpen) {
        cartMenu.classList.add("inactive")
    }
    productDetailConteiner.classList.remove("inactive")
}
function closeDetails() {
    productDetailConteiner.classList.add("inactive")
}

//adiccion de productos

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})
productList.push({
    name: "Drums",
    price: 5000,
    image: "https://www.sonor.com/fileadmin/user_upload/instruments/drums/sq2/sq2menue.jpg"
})
productList.push({
    name: "Gamer pc",
    price: 3500,
    image: "https://apollo-virginia.akamaized.net/v1/files/hzd8gexcldsp2-CO/image;s=850x0"
})
renderProducts(productList)

//creacion de tarjertas
function renderProducts(arr) {
    for (product of arr) {
    //sintaxis corta para for (como en pyton), con "in" nos da el index y con of da el elemento
    const productCard = document.createElement("div")
    const img = document.createElement("img")
    const productInfo = document.createElement("div")
    const productInfoDiv = document.createElement("div")
    const productPrice = document.createElement("P")
    const productName = document.createElement("P")
    const productInfoFigure = document.createElement("figure")
    const productImgCart = document.createElement("img")

    //adicion de clases y elementos
    productCard.classList.add("product-card")
    img.setAttribute("src", product.image)
    img.addEventListener("click", openProductDetail)
    productDetailClose.addEventListener("click", closeDetails)
    productInfo.classList.add("product-info")
    productPrice.innerText = "$" + product.price
    productName.innerText = product.name
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

    //se ordena la maquetacion 
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    productInfoFigure.appendChild(productImgCart)
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
    productCard.appendChild(img)
    productCard.appendChild(productInfo)
    cardsContainer.appendChild(productCard)
    
    // Con Element.append() podemos agregar varios nodos y texto mientras que 
    // con Element.appendChild() solo podemos agregar un nodo.
}}