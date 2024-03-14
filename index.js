let imageNike =  document.getElementById('imageNike')
let productItems = document.getElementById('product-items')
let blue = document.getElementById('blue')
let red = document.getElementById('red')
let green = document.getElementById('green')
let priceProduct = document.getElementById('price-product')
let productBrand = document.getElementById('productBrand')
let limitedEdition = document.getElementById('limitedEdition')
let button = document.getElementById('button')


red.addEventListener('click' , () => {
    imageNike.src = '/img/nike-red.png'
    productItems.textContent = 'Red Nike Dunk High By You'
    priceProduct.innerHTML = "<strong>$150.00</strong>"
    productBrand.style.backgroundColor = 'red'
    limitedEdition.style.display = 'block'
})

blue.addEventListener('click' , () => {
    imageNike.src = '/img/nike-blue.png'
    productItems.textContent = 'Blue Nike Dunk High By You'
    priceProduct.innerHTML = "<strong>$100.00</strong>"
    productBrand.style.backgroundColor = 'blue'
    limitedEdition.style.display = 'none'


})

green.addEventListener('click' , () => {
    imageNike.src = '/img/nike-green.png'
    productItems.textContent = 'Green Nike Dunk High By You'
    priceProduct.innerHTML = "<strong>$80.00</strong>"
    productBrand.style.backgroundColor = 'green'
    limitedEdition.style.display = 'none'
})

button.addEventListener('click' , () => {
     alert("Sorry, This product out of stock.")
})