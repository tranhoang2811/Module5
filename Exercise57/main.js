function calculateItemPrice(quantity, priceId, resultId) {
    const price = document.getElementById(priceId).innerText.replace('$', '');
    const totalPrice = parseFloat(quantity) * parseFloat(price);
    document.getElementById(resultId).value = totalPrice.toFixed(2).toString() + '$';
    return totalPrice;
}

function sumAll(quantityList, priceIdList, resultIdList) {
    let total = 0;
    for (let i = 0; i < quantityList.length; i++) {
        total += calculateItemPrice(quantityList[i], priceIdList[i], resultIdList[i]);
    }
    document.getElementById('result').value = total.toFixed(2).toString() + '$';
}