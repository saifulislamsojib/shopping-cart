const subtotal = document.getElementById("subtotal-amount");
const tax = document.getElementById("tax-amount");
const totalAmount = document.getElementById("total-amount");
const mobilePrice = document.getElementById("mobile-price");
const casePrice = document.getElementById("case-price");
removeSection(mobilePrice, casePrice);
removeSection(casePrice, mobilePrice);
function clickEvent(count, trueFalse, price, PriceAmount, price2) {
    plusMinus(count, trueFalse);
    updateSpanText(price, count, PriceAmount);
    total(price, price2, subtotal);
    inTotal();
}
function plusMinus(id, isPlus) {
    const countNumber = valueToNumber(id);
    let totalCount = countNumber;
    if (isPlus == true) {
        totalCount = countNumber + 1;
    }
    if (isPlus == false && countNumber > 0) {
        totalCount = countNumber - 1;
    }
    document.getElementById(id).value = totalCount;
}
function valueToNumber(id) {
    const count = document.getElementById(id);
    let countNumber = 0;
    if (count !== null) {
        countNumber = parseInt(count.value) || 0;
    }
    return countNumber;
}
function textToNumber(id) {
    const countNumber = parseInt(id.innerText) || 0;
    return countNumber;
}
function updateSpanText(id1, id2, PriceAmount) {
    const countNumber = valueToNumber(id2);
    const total = PriceAmount * countNumber;
    id1.innerText = total;
}
function total(id1, id2, id3) {
    const price1 = textToNumber(id1);
    const price2 = textToNumber(id2);
    const totalPrice = price1 + price2;
    id3.innerText = totalPrice;
}
function inTotal() {
    const subtotalAmount = textToNumber(subtotal);
    const taxAmount = subtotalAmount * 0.1;
    const roundTax = Math.round(taxAmount);
    tax.innerText = roundTax;
    total(subtotal, tax, totalAmount);
}
function onChange(price, count, PriceAmount, price2) {
    const counter = valueToNumber(count);
    if (counter < 0) {
        alert("Count is not a negative number");
        document.getElementById(count).value = "1";
    }
    else {
        updateSpanText(price, count, PriceAmount);
        total(price, price2, subtotal);
        inTotal();
    }
}
function removeSection(price, price2) {
    document.getElementById("cart-items").addEventListener("click", function (e) {
        const cartItem1 = document.getElementById("cart-item1");
        const cartItem2 = document.getElementById("cart-item2");
        const removeItem1 = document.getElementById("remove-item1");
        const removeItem2 = document.getElementById("remove-item2");
        if (e.target === removeItem1) {
            this.removeChild(cartItem1);
            mobilePrice.innerText = "";
            total(price, price2, subtotal);
            inTotal();
        }
        if (e.target === removeItem2) {
            this.removeChild(cartItem2);
            casePrice.innerText = "";
            total(price, price2, subtotal);
            inTotal();
        }
    })
}