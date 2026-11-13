const kafe = 'Kardemumma'

function visaNamn() {
    const recept = 'hemligt'
    console.log(kafe) // gissning: Kardemumma
    console.log(recept) // gissning: hemligt
}
visaNamn()

let räknare = 0
function ökaRäknare() {
    räknare = räknare + 1
}
ökaRäknare()
ökaRäknare()
console.log(räknare) // gissning: 2
function lokal() {
    let räknare = 100
    räknare++
    return räknare
}
console.log(lokal()) // gissning:  101
console.log(räknare) // gissning:   2

//Ta bort kommentaren på nästa rad och läs felet:
//console.log(recept) // gissning: function scope  variable  end once block ends

for (let i = 0; i < 3; i++) {
    console.log('varv', i)
}

// Ta bort kommentaren på nästa rad och läs felet:
//console.log(i) // gissning:   error i not defined
//varv0
//varv1
//varv2

// variables defined inside a block cant be seen out of its scope
// if variable defined out of block it can be seen to other functions
