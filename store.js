let  Barcode = document.getElementById("Barcode");
let  Quantity = document.getElementById("Quantity");
let  Add = document.getElementById("Add");
let loggedInfo= document.getElementById("Info");
var total = 0; 
var totalation = document.getElementById("totalation");
var grandTotal = document.getElementById("grandTotal");
var completar = document.getElementById("completar")

const Items = {
    "689145740844":{
        name: "JavaScript Textbook",
        price:"34.95"
    },

    "4549292070248":{
        name: "Xerox Paper",
        price: "10.99" 
    },

    "092265222983":{
        name: "First Aid Kit",
        price: "20.99"
    },

    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)",
        price: "15.99"
    },

    "686024002468":{
    name: "Sanitizing Wipes",
    price: "10.99"
    }, 

    "860004186236":{
        name: "N95 Face Masks",
        price: "15.99"
    },

    "036000214000":{
        name: "Kleenex",
        price: "3.99"
    },

    "8809693254156":{
        name: "Hand Sanitizer",
        price: "15.99"
    },

    "036000214000":{
        name: "Kleenex",
        price: "3.99"
    },

    "8809693254156":{
        name: "Hand Sanitizer",
        price: "7.99"
    },

    "036500060480":{
        name: "Printer Paper",
        price: "9.99"
    },

    "085014561877":{
        name: "Brush Pens",
        price: "10.99"
    },

    "X0032YGP2T":{
        name: "Multiport Adapter",
        price: "25.99"
    }, 

    "B07G6JT1XS":{
        name: "Scissors (20ct.)",
        price: "23.99"
    },

    "9780134682334":{
        name: "iOS Programming Textbook",
        price: "119.99"
    },

    "718103230759":{
        name: "Spiral Notebook",
        price: "1.99"
    },

}
var add =0;

function addToCart (){
    let quantityInput = Quantity.value;
    let infoLine= document.createElement("div");
    loggedInfo.appendChild(infoLine)
    let itemInput = Barcode.value;
    if(Items.hasOwnProperty(itemInput)){

        let product = Items[itemInput];
        let itemFromCart = checkIfInCart(product);

        if(itemFromCart){
            console.log(itemFromCart)
            let quantityOfItem = parseInt(itemFromCart.querySelector(".quan").innerText);
            let priceee = parseInt(itemFromCart.querySelector(".price").innerText);
            quantityOfItem += parseInt(quantityInput);
            total += quantityInput*priceee
            itemFromCart.querySelector(".quan").innerText= quantityOfItem
            // total += quantityInput*product.price;
            totalation.innerText="Total: $"+ total.toFixed(2);
            return
        }

        let itemName = document.createElement("p");
        itemName.innerText = product.name;
        infoLine.appendChild(itemName);
        itemName.classList.add("objectName")
        let itemPrice = document.createElement("p");
        itemPrice.innerText = product.price; 
        infoLine.appendChild(itemPrice);
        itemPrice.classList.add("price")
        let quantityBox = document.createElement("p");
        quantityBox.innerText = quantityInput;
        infoLine.appendChild(quantityBox);
        infoLine.classList.add("infoBox");
        quantityBox.classList.add("quan")
        console.log (quantityBox);
        total += quantityInput*product.price;
        totalation.innerText="Total: $"+ total.toFixed(2);
       
    }
}

function checkIfInCart(product){
    let cartItems = document.querySelectorAll(".infoBox");
        //use a for loop to look over all items in your cart
    for(let i = 0; i<cartItems.length; i++){
      //compare the name of each item in your cart to the name of the product
      if (product.name=== cartItems[i].querySelector(".objectName").innerText){
        return cartItems[i];
      }
    }
        //if you find a match then you return that element you are looking at
}

function displayGrandTotal(){
    let grand = total* 1.0925; 
    grandTotal.innerText = "Grand Total is $"+grand.toFixed(2); 

}


Add.addEventListener("click", addToCart);
completar.addEventListener("click",displayGrandTotal);
