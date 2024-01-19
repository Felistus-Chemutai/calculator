function myShopping(){
    price=document.getElementById("price").value
    quantity=document.getElementById("quantity").value
totalPrice= (price) *(quantity);

    document.getElementById("totalPrice").innerHTML = "totalPrice: " totalPrice;
}
myShopping()