// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const nationalTeams = [
    {
        name: "Italy",
        pointsScored: 0,
        pointsMissed: 0
    },
    {
        name: "Argentina",
        pointsScored: 0,
        pointsMissed: 0
    },
    {
        name: "Germany",
        pointsScored: 0,
        pointsMissed: 0
    },
    {
        name: "France",
        pointsScored: 0,
        pointsMissed: 0
    },
    {
        name: "Peru",
        pointsScored: 0,
        pointsMissed: 0
    }
];


// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let i = 0; i < nationalTeams.length; i++) {
    const team = nationalTeams[i]; // team rappresenta il mio array nationalTeams

    //ho preso ogni oggetto = pointsScored del array con dot notation
    team.pointsScored = Math.floor(Math.random() * 5) + 1;
    console.log(`${team.name} points Scored: ${team.pointsScored}`);

    //ho preso ogni oggetto = pointsMissed del array con dot notation
    team.pointsMissed = Math.floor(Math.random() * 5) + 1;
    console.log(`${team.name} points Missed: ${team.pointsMissed}`);

}
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

console.log(nationalTeams)