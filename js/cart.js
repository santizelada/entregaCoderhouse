const productsInCart = JSON.parse(localStorage.getItem("products-in-cart"))

const containerCartEmpty = document.querySelector("#empty-cart")
const containerCartProducts = document.querySelector("#cart-products")
const containerCartActions = document.querySelector("#cart-actions")
const containerCartBought = document.querySelector("#cart-bought")

if (productsInCart){

containerCartEmpty.classList.add("disabled")

containerCartProducts.classList.remove("disabled")
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
    
}