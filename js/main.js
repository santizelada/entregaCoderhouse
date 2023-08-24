const products = [
    // LadyGaga outfits
    {
        id: "lgOutfit-01",
        name: "Outfit 1 formal",
        picture: "../img/outfit1.jpeg",
        category: {
            title: "Outfits",
            id: "outfits"
        },
        price: 1000
    },
    {
        id: "lgOutfit-02",
        name: "Outfit 2 formal",
        picture: "../img/outfit2.webp",
        category: {
            title: "Outfits",
            id: "outfits"
        },
        price: 1000
    },
    {
        id: "lgOutfit-03",
        name: "Outfit 3 formal",
        picture: "../img/outfit3.jpg",
        category: {
            title: "Outfits",
            id: "outfits"
        },
        price: 1000
    },
    {
        id: "lgOutfit-04",
        name: "Outfit 4 formal",
        picture: "../img/outfit4.webp",
        category: {
            title: "Outfits",
            id: "outfits"
        },
        price: 1000
    },
    {
        id: "lgOutfit-05",
        name: "Outfit 5 formal",
        picture: "../img/outfit5.png",
        category: {
            title: "Outfits",
            id: "outfits"
        },
        price: 1000
    },



    // JlawDresses
    {
        id: "jLawDress-01",
        name: "Dress 01",
        picture: "../img/jLawDress1.webp",
        category: {
            title: "Dresses",
            id: "dresses"
        },
        price: 1000
    },
    {
        id: "jLawDress-02",
        name: "Dress 02",
        picture: "../img/jLawDress2.webp",
        category: {
            title: "Dresses",
            id: "dresses"
        },
        price: 1000
    },
    {
        id: "jLawDress-03",
        name: "Dress 03",
        picture: "../img/jLawDress3Suit.jpg",
        category: {
            title: "Dresses",
            id: "dresses"
        },
        price: 1000
    },
    {
        id: "jLawDress-04",
        name: "Dress 04",
        picture: "../img/jLawDress4.webp",
        category: {
            title: "Dresses",
            id: "dresses"
        },
        price: 1000
    },
    {
        id: "jLawDress-05",
        name: "Dress 05",
        picture: "../img/jLawDress5.webp",
        category: {
            title: "Dresses",
            id: "dresses"
        },
        price: 1000
    },
    {
        id: "jLawDress-06",
        name: "Dress 06",
        picture: "../img/jLawDress6.webp",
        category: {
            title: "Dresses",
            id: "dresses"
        },
        price: 1000
    },


    // Men Style
    {
        id: "elegantMen-01",
        name: "Elegant Men Style 01",
        picture: "../img/elegantMen1.jpg",
        category: {
            title: "Men",
            id: "elegantMenStyle"
        },
        price: 1000
    },
    {
        id: "elegantMen-02",
        name: "Elegant Men Style 02",
        picture: "../img/elegantMen2.jpg",
        category: {
            title: "Men",
            id: "elegantMenStyle"
        },
        price: 1000
    },
    {
        id: "elegantMen-03",
        name: "Elegant Men Style 03",
        picture: "../img/elegantMen3.jpg",
        category: {
            title: "Men",
            id: "elegantMenStyle"
        },
        price: 1000
    },
    {
        id: "elegantMen-04",
        name: "Elegant Men Style 04",
        picture: "../img/elegantMen4.jpg",
        category: {
            title: "Men",
            id: "elegantMenStyle"
        },
        price: 1000
    },
    {
        id: "elegantMen-05",
        name: "Elegant Men Style 05",
        picture: "../img/elegantMen5.jpg",
        category: {
            title: "Men",
            id: "elegantMenStyle"
        },
        price: 1000
    }
];

const productsContainer = document.querySelector("#products-container")
const categoriesButtons = document.querySelectorAll(".productsButton")
const mainTitle = document.querySelector("#main-title")
let addButton = document.querySelectorAll(".add-product")
const numberCart = document.querySelector("#numberCart")

function loadProducts(productsSelected) {

    productsContainer.innerHTML = "";

    productsSelected.forEach(product =>{   

        const div = document.createElement("div");
        div.classList.add("product"); /*-----------------------------------------------------------------------------Here there has been removed the dot from (".product") */
        div.innerHTML = `
            <img class="product-image" src="${product.picture}" alt="${product.name}">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-product" id="${product.id}">Add</button>
            </div>
        `  
        productsContainer.append(div);


    })

    updateAddButtons()
}

loadProducts(products);

categoriesButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        categoriesButtons.forEach(button => button.classList.remove("active"))
        e.currentTarget.classList.add("active")


        if (e.currentTarget.id != "all") {
            const productCategory = products.find(product => product.category.id === e.currentTarget.id)
            mainTitle.innerText = productCategory.category.name
            const productsButton = products.filter(product => product.category.id === e.currentTarget.id);
            loadProducts(productsButton);
        } else {
            mainTitle.innerText = "All the products";
                loadProducts(products);
        }



    })
}
)


function updateAddButtons() {
    addButton = document.querySelectorAll(".add-product")

    addButton.forEach(button => {
        button.addEventListener("click", addToCart)
    })
    
}

// let productsInCart;

// let productsInCartLS = localStorage.getItem("products-in-cart")


// if(productsInCartLS) {
//     productsInCart = JSON.parse(productsInCartLS)
//     updateNumberCart();
// } else {
//     productsInCart = productsInCartLS
// }

const productsInCart = [];

// const idButton = e.currentTarget.id
// const addedProduct = products.find(product => product.id ===idButton)

function addToCart(e){

    const idButton = e.currentTarget.id
    const addedProduct = products.find(product => product.id ===idButton)

    if(productsInCart.some(product => product.id === idButton)){
        const index = productsInCart.findIndex(product => product.id === idButton)
        productsInCart[index].amount++;
    } else {
        addedProduct.amount = 1
        productsInCart.push(addedProduct)
    }

    updateNumberCart()

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}

function updateNumberCart(){

    let newNumberCart = productsInCart.reduce((acc, product) => acc + product.amount, 0)
    numberCart.innerText = newNumberCart
}

