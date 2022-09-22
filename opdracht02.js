let inputPrice = prompt("Geef een inkoopprijs in");
let inputTax = prompt("Geef een BTW-tarief in");

let price = parseFloat(inputPrice);
let tax = parseFloat(inputTax);

// Het cijfer 0 zal ook een foutmelding geven. In JavaScript geven volgende waardes een 'false' resultaat:
// null
// undefined
// NaN
// een lege string ("")
// het cijfer 0
// false

if (price && tax) {
    alert("De verkoopprijs = " + (inputPrice + (inputPrice * inputTax / 100)));
} else {
    alert("Oeps er ging iets fout.");
}
