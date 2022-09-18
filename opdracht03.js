let teams = 
    [
        "Red Bull Racing", 
        "Mercedes", 
        "Alpine", 
        "Williams", 
        "Ferrari", 
        "Aston Martin", 
        "AlphaTauri", 
        "Alfa Romeo",
        "McLaren",
        "Haas F1 Team",
    ];

teams.forEach((team) => {
    console.log(team);
});

alert(`aantal teams: ${teams.length}`);

for (let i = 0; i < teams.length; i++) {
    if (teams[i] === "Ferrari") {
        teams.splice(i, 1);
    }
}

console.log(teams);

