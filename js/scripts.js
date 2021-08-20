//update price for extra things
function updateCosts(type, cost) {
    const extraMemoryCost = document.getElementById(type);
    const extraStroageCost = document.getElementById(type);
    const extraDeliveryCost = document.getElementById(type);
    extraMemoryCost.innerHTML = cost;
    extraStroageCost.innerHTML = cost;
    extraDeliveryCost.innerHTML = cost;
    totalPrice();
}

//update total money
function totalPrice() {
    const normalCost = parseFloat(document.getElementById("best-price").innerHTML);
    const totalCost = document.getElementById("total");
    const total = document.getElementById("total-price");
    const extraMemoryCost = parseFloat(document.getElementById("extra-memory-cost").innerHTML);
    const extraStroageCost = parseFloat(document.getElementById("extra-stroage-cost").innerHTML);
    const extraDeliveryCost = parseFloat(document.getElementById("delivery-charge").innerHTML);
    totalCost.innerHTML = normalCost + extraMemoryCost + extraStroageCost + extraDeliveryCost;
    total.innerHTML = totalCost.innerHTML;
}

//set value for buttons
document.getElementById("8gb-memory").addEventListener("click", function () {
    updateCosts("extra-memory-cost", 0);
})
document.getElementById("16gb-memory").addEventListener("click", function () {
    updateCosts("extra-memory-cost", 180);
})
document.getElementById("256gb-stroage").addEventListener("click", function () {
    updateCosts("extra-stroage-cost", 0);
})
document.getElementById("512gb-stroage").addEventListener("click", function () {
    updateCosts("extra-stroage-cost", 100);
})
document.getElementById("1tb-stroage").addEventListener("click", function () {
    updateCosts("extra-stroage-cost", 180);
})
document.getElementById("5day-delivery").addEventListener("click", function () {
    updateCosts("delivery-charge", 0);
})
document.getElementById("1day-delivery").addEventListener("click", function () {
    updateCosts("delivery-charge", 20);
})

//copun code offer
document.getElementById("promo-code-submit").addEventListener("click", function () {
    const promoCodeInput = document.getElementById("promo-code-input");
    const totalCost = document.getElementById("total-price");
    const totalCostWithPromo = document.getElementById("total");
    const totalCostNumber = parseFloat(totalCost.innerHTML);
    if (promoCodeInput.value == "stevekaku") {
        totalCostWithPromo.innerHTML = totalCostNumber - (totalCostNumber / 5);
        promoCodeInput.value = " ";
    }
})