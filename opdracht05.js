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

//Oplossing met een for-loop met index
for (let i = 0; i < fietsen.length; i++) {
    if (fietsen[i].prijs < 2500) {
        console.log(fietsen[i]);
    }
};

//Oplossing met een foreach loop
fietsen.forEach((fiets) => {
    if (fiets.prijs < 2500) {
        console.log(fiets);
    }
});