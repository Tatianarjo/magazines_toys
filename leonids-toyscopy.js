const toys = [
    {

    id: 1,
    name: "Ava",
    from: "Malibu",
    size: "teen",
    price: 20
},
{
    id: 2,
    name: "Mai",
    from: "Shelbyville",
    size: "adult",
    price: 24
},
{
    id: 3,
    name: "AnnaLee",
    from: "Haley",
    size: "kid",
    price: 65
}
]

const auntie = {
    id: 4,
    name: "Edith",
    from: "Flat Creek",
    size: "elderly",
    price: 417
}

toys.push(auntie)

const uncle = { //Adding Uncle without an id here
    name: "Bobby",
    from: "a house",
    size: "big",
    price: 87
}

// const addUncleToList = (toyObject) => { //creating a function to add Uncle with an id here
    const lastIndex = toys.length -1
    const currentLastUncle = toys [lastIndex]
    const maxId = currentLastUncle.id
    const idForNewUncle = maxId +1
    
    toyObject.id = idForNewUncle
    toys.push(toyObject)
}

addUncleToList(uncle)


const peaches = {
    name: "Peaches",
    from: "New Rochelle",
    size: "little bitty",
    price: 4
}

const lastIndex = toys.length -1
const currentLastPeaches = toys [lastIndex]
const maxId = currentLastPeaches.id
const idForNewPeaches = maxId + 1

toyObject.id = idForNewPeaches
toys.push(toyObject)
}

addNewPeachestoList(peaches)

// for (const toy of toys) {
//     console.log(`The ${toy.name} and ${toy.id} is ${toy.price}`)
// }

const removeProduct = (toyObject) => {
    const lastIndex = toys.length -1
    const currentLastProduct = toys [lastIndex]
    const maxId = currentLastProduct.id
    const removeToy = maxId + 1

    toyObject.id = removeToy
    toys.splice(toyObject)

}

removeProduct(uncle)

// const toyToFind = 4
// // I only want the information of the id of 4 to come up and I want to add an increase of the price
// for (const toy of toys) {

//     if (toy.id === toyToFind) { 
//         // the === means that I want it to equal that in which I am looking for 
//         toy.price = toy.price + 80

//         console.log(`The ${toy.size} is ${toy.name} and costs ${toy.price}.`)
//     }
// }

// for (const toy of toys) { //Now I am making a sentence from each of the keys & values.
//     console.log(` My ${toy.name} is from ${toy.from} and is ${toy.size}.`)
// }


// for (const toy of toys) {
// //Adding 80 to the price of the toy
//     toy.price = toy.price + 80
// //The output of what I just did.
//     console.log(`The ${toy.name} is now ${toy.price}.`)
// }

// for (const toy of toys) {
//     console.log(toy.price)
// } //When I want to just see prices of the toys and nothing else. I can change the . information to whatever I want to see don't forget the formula though


// for (const toy of toys) {
//     console.log(toy.name)
// }

// toys.push(3) 

// console.log(toys)

// for (const toy of toys) {
//     console.log(toy.from)
// }

// for (const toy of toys) {
//     console.log(toy.size)
// }
