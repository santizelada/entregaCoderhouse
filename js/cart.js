let productsInCart = localStorage.getItem("products-in-cart")
productsInCart = JSON.parse(productsInCart)

const containerCartEmpty = document.querySelector("#empty-cart")
const containerCartProducts = document.querySelector("#cart-products")
const containerCartActions = document.querySelector("#cart-actions")
const containerCartBought = document.querySelector("#cart-bought")
const emptyButton = document.querySelector("#cart-empty")
const containerTotal = document.querySelector("#total")
const buyButton = document.querySelector("#cart-buy")

let deleteButtons = document.querySelectorAll(".cart-product-delete")



function loadProductsInCart() {
    if (productsInCart && productsInCart.length > 0 ){


        containerCartEmpty.classList.add("disabled")
        containerCartProducts.classList.remove("disabled")
        containerCartActions.classList.remove("disabled")
        containerCartBought.classList.add("disabled")
        
        containerCartProducts.innerHTML = ""
        
        productsInCart.forEach(product =>{
            const div = document.createElement("div");
            div.classList.add("cart-product")
            div.innerHTML = `
            <img class="cart-product-picture" src="${product.picture}" alt="${product.name}"> /*------------------name or title. Check that out*/
                <div class="cart-product-name">
                            <small> Name </small>
                            <h3>${product.name}</h3>
                    </div>
                    <div class="cart-product-amount">
                        <small>Amount</small>
                        <p> ${product.amount} </p>
                    </div>
                    <div class="cart-product-price">
                        <small>Price</small>
                        <p>US$${product.price}</p>
                    </div>
                    <div class="cart-product-subtotal">
                        <small>Subtotal</small>
                        <p>US$${product.price * product.amount}</p>
                    </div>
                    <button class="cart-product-delete" id="${product.id}"><i class="bi bi-trash-fill"></i></button> -->
            `
            containerCartProducts.append(div);
        
        })
        } else {
        
            containerCartEmpty.classList.remove("disabled")
            containerCartProducts.classList.add("disabled")
            containerCartActions.classList.add("disabled")
            containerCartBought.classList.add("disabled")
        }

        updateDeleteButtons()
        updateTotal()
}

loadProductsInCart()

function updateDeleteButtons() {
    deleteButtons = document.querySelectorAll(".cart-product-delete")

    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteFromCart)
    })
    
}

function deleteFromCart(e) {

    const idButton = e.currentTarget.id
    const index = productsInCart.findeIndex(product => product.id ===idButton)

    productsInCart.splice(index, 1)
    loadProductsInCart()

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))

}

emptyButton.addEventListener("click", unfillCart)

function unfillCart() {

    productsInCart.length = 0
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))
    loadProductsInCart()
}

function updateTotal() {
    const calculatedTotal = productsInCart.reduce((acc, product) => acc + (product.price * product.amount), 0)
    total.innerText = `$${calculatedTotal}`
}


buyButton.addEventListener("click", buyCart)

function buyCart() {

    productsInCart.length = 0
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))

    containerCartEmpty.classList.add("disabled")
    containerCartProducts.classList.add("disabled")
    containerCartActions.classList.add("disabled")
    containerCartBought.classList.remove("disabled")

}