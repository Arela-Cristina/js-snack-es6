// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


function myFunction(array, a, b) {
    // ritornerà un nuovo array
    const newArray = [];
    array.length = b
    //cicliamo ogni elemento
    for (let i = a; i < b; i++) {
        console.log(array[i])
        const element = array[i]

        //nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'
        newArray.push(element)
    }

    return newArray
}


//controlli

//se il valore passato e uno array
//if(array.isArray(elements)){
//console.error('elements must be array')
//return
//}

//se a oppure b non sono numeri
//if(isNaN(a) || isNaN(b)){
//console.error('a is not a number')
//return
//} else if {
//console.error('b is not a number')
//return
//}

//a maggiore da b  oppure  a = Math.max(start, o)
// if(a < 0) {
//start = 0
//}

//b minore di b   oppure b = Math.min(end.elements.lenght)
//if(end >elements.length ){
//b = elements.length
//}

// function myFunction(array, a, b) {
//     // ritornerà un nuovo array
//     const newArray = [];
//     array.length = b
//     //cicliamo ogni elemento
//     for (let i = a; i < b; i++) {
//         console.log(array[i])
//         const element =  array[i]

//         //nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'
//         newArray.push(element)
//     }

//     return newArray
// }
