let inputPrice = prompt("Geef een inkoopprijs in");
let inputTax = prompt("Geef een BTW-tarief in");

let price = parseFloat(inputPrice);
let tax = parseFloat(inputTax);

if (price && tax) {
    alert("De verkoopprijs = " + (inputPrice + (inputPrice * inputTax / 100)));
} else {
    alert("Oeps er ging iets fout.");
}
