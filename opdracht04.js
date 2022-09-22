let bikePrices = [5329, 4999, 2499, 1999, 3750, 6415];
let average = averagePrice(bikePrices);

console.log(`De gemiddelde prijs voor een fiets bedraagt ${average} euro.`);

function averagePrice(prices) {
    let total = 0;
    prices.forEach(price => total = total + price);
    return total / prices.length;
}