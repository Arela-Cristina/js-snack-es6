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
    const team = nationalTeams[i];
    console.log(nationalTeams[i]);
}
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

