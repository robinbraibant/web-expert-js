//deel 1
let parent = document.getElementById("main");

let heading = document.createElement("h2");
heading.innerText = "Populaire elektrische fietsen";
parent.appendChild(heading);

let avarageButton = document.createElement("button");
avarageButton.textContent = "Gemiddelde prijs";
parent.appendChild(avarageButton);

let topButton = document.createElement("button");
topButton.textContent = "Top 3";
parent.appendChild(topButton);

let contentBlock = document.createElement("div");
contentBlock.id = "content";
parent.appendChild(contentBlock);

//deel 2
let fietsen = [
    {
        merk: "Kalkhoff",
        model: "Endeavour 3.B Move",
        prijs: 2699,
        score: 8.7,
    },
    {
        merk: "Victoria",
        model: "E-Trekking 6.5 Wave",
        prijs: 2599,
        score: 8.3,
    },
    {
        merk: "Pegasus",
        model: "Siena E7F Plus",
        prijs: 2399,
        score: 8.1,
    },
    {
        merk: "Batavus",
        model: "Dinsdag E-Go Classic",
        prijs: 2499,
        score: 7.9,
    },
    {
        merk: "Hercules",
        model: "Montfoort Cruise",
        prijs: 2499,
        score: 7.9,
    },
];

let list = document.createElement('ul');
fietsen.forEach((fiets) => {
    let listItem = document.createElement('li');
    listItem.innerText = `${fiets.merk} - ${fiets.model}` ;
    if(fiets.score > 8) {
        listItem.style.color = "green";
        listItem.style.fontWeight = "bold";
    }
    list.appendChild(listItem); 
});
contentBlock.appendChild(list);