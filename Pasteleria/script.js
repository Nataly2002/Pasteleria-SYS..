
// script.js
window.onload = function() {
    alert("¡Bienvenido a nuestra tienda de calzado para hombres!");
};
const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})