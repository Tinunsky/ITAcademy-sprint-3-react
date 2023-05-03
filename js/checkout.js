
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}



/*
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
function buy(id) {
    for (let index = 0; index < products.length; index++) {
        if (id === products[index].id) {
            console.log(`added product ${products[index].name}`);
            cartList.push(products[index]);
        }
    }
    console.log(cartList)
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
    total = 0;
    for (const item of cart) {
        total = item.quantity * item.price;
        console.log(total)
    }
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this 
// array "cart" shows the quantity of product.
function generateCart() {
    for (const product of cartList) {
        let itemFound = false;
        for (const item of cart) {
            if (product.id === item.id) {
                item.quantity++;
                itemFound = true;
                continue;
            }
        }

        if (!itemFound) {
            product.quantity = 1;
            cart.push(product)
        }
    }
    console.log(cart)
}

// Exercise 5
// Apply promotions to each item in the array "cart"

/*function applyPromotionsCart___GOOD() {
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].quantity >= cart[index].offer.number) {
            const subTotal = cart[index].price * cart[index].quantity;
            const discountAmount = subTotal * cart[index].offer.percent / 100;
            cart[index].subtotalWithDiscount = subTotal - discountAmount
        }
    }
}
*/

/*

function applyPromotionToItem(item) {
    let subtotalWithDiscount = item.subTotal;
    if (item.offer) {
        if (item.quantity >= item.offer.number) {
            const subTotal = item.price * item.quantity;
            const discountAmount = subTotal * item.offer.percent / 100;
            subtotalWithDiscount = subTotal - discountAmount;
        }
    }
    return subtotalWithDiscount;
}


function applyPromotionsCart() {
    for (const item of cart) {
        item.subTotal = item.price * item.quantity; 
        item.subtotalWithDiscount = applyPromotionToItem(item);
        console.log(`subtotalWithDiscount: ${item.subtotalWithDiscount}`);
    }

}


// Exercise 6
function printCart() {
    const checkoutTable = document.getElementById("cart_list");
    checkoutTable.innerHTML = '';
    
    function addItemRow(item) {
        const row = checkoutTable.insertRow();
        const cellName = row.insertCell(0);
        const cellPrice = row.insertCell(1);
        const cellQuantity = row.insertCell(2);
        const cellSubtotal = row.insertCell(3);
        
        //const subTotal = item.subtotalWithDiscount || item.price * item.quantity; 
        cellName.outerHTML = `<th>${item.name}</th>`;
        cellPrice.innerText = item.price;
        cellQuantity.innerText = item.quantity;
        cellSubtotal.innerText = item.subtotalWithDiscount;
    }

    for (item of cart) {
        addItemRow(item)
    }
    const totalPrice = document.getElementById("total_price");
    totalPrice.innerHTML = total

    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    generateCart();
    applyPromotionsCart()
    calculateTotal()
    printCart()
} */