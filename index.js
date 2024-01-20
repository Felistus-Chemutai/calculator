 function getTotal() {
    numb1 = document.getElementById("number-one").value;
    numb2 = document.getElementById("number-two").value;

    let result = numb1 * numb2;
    document.getElementById("result").textContent = result;
}

