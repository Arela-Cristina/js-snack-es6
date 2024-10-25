// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


function myFunction(array, a, b) {
    // ritornerà un nuovo array
    const newArray = [];
    array.length = b
    //cicliamo ogni elemento
    for (let i = a + 1; i < b; i++) {
        console.log(array[i])
        const element =  array[i]

        //nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'
        newArray.push(element)
    }

    return newArray
}

