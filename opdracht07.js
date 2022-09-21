//deel 1
let parent = document.getElementById("main");

let heading = document.createElement("h2");
heading.innerText = "Populaire elektrische fietsen";
parent.appendChild(heading);

let averageButton = document.createElement("button");
averageButton.textContent = "Gemiddelde prijs";
parent.appendChild(averageButton);

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

//Events
averageButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let price = Math.round(averagePrice(fietsen));

    paragraph.innerText = `de gemiddelde prijs van de fietsen bedraagt € ${price}`;
    parent.appendChild(paragraph);
})

function averagePrice(list) {
    total = 0;
    list.forEach((fiets) => {
        total += fiets.prijs;
    });
    return total / list.length;
}

//Extra
topButton.addEventListener('click', () => {
    let sortedList = fietsen.sort((a,b) => a.score - b.score);
    let reversedList = sortedList.reverse();
    let list = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = `${reversedList[i].merk} - ${reversedList[i].model}: score = ${reversedList[i].score}` ;
        list.appendChild(listItem); 
    }
    contentBlock.innerHTML = '';
    contentBlock.appendChild(list);
    // console.log(sortedList.reverse());
})