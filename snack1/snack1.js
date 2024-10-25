// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikeArray = [
    {
        name: "Mountain Bike",
        weight: 14.5
    },
    {
        name: "Road Bike",
        weight: 8.3
    },
    {
        name: "BMX bike",
        weight: 10.2
    },
    {
        name: "Folding Bike",
        weight: 12.1
    }
];

//creiamo un elemento per stampare i risultati 
const mainContainer = document.getElementById('mainContainer')
//cicliamo ogni oggetto del array
for (let i = 0; i < bikeArray.length; i++) {
    //salvo in 'elements' ogni oggetto del mio array
    const elements = bikeArray[i];
    // console.log(elements)

    //stampo ogni oggetto del array dot.notation
    mainContainer.innerHTML += 
    `<div>Nombre: ${elements.name}</div> 
    <div>Peso: ${elements.weight} kg</div>
    <br><br>`;

}