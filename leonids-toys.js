// const nanoBaby = {
//  id: 1,
//  name: "Peaches",
//  color: "hotpink",
//  size: "small" ,  
// }

// const gigaPet = {
// id: 2,
// name: "Baskets",
// color: "neongreen",
// size: "medium",
// }

// const tamagotchi = {
//     id: 3,
//     name: "MissGiggles",
//     color: "clear",
//     size: "large",

// }

// console.log(tamagotchi)

// console.log(nanoBaby)

const toys = [
    {
        id: 1,
        type: "nanoBaby",
        name: "Peaches",
        color: "hotpink",
        size: "small",
        price: 417
    },
    {
        id: 2,
        type: "gigaPet",
        name: "Baskets",
        color: "neongreen",
        size: "medium",
        price: 20
    },
    {
        id: 3,
        type: "tamagotchi",
        name: "MissGiggles",
        color: "clear",
        size: "large",
        price: 16
    }

]

// console.log(toys)

for (const toy of toys) {
    console.log(toy.type)
}

const digi = {
    id: 4,
    type: "barbie",
    name: "AnnaLee",
    color: "purple",
    size: "teen",
    price: 10
}

toys.push(digi)

console.log(toys)

for (const toy of toys){
    console.log(toy.name)
}

const mattel = {
    id: 5,
    type: "barbie",
    name: "Marie",
    color: "salmon",
    size: "adult",
    price: 2.00
}

toys.push(mattel)

console.log(toys)

for (const toy of toys) {
    console.log(toy.size)
}

for (const toy of toys) {
    console.log(`The ${toy.type} ${toy.name} is ${toy.size}`)
}

for (const toy of toys) {
    toy.price = toy.price + 0.05
    
    console.log(`The ${toy.name} costs $${toy.price} now.`)
}

const toyToFind = 4

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + 0.05
        console.log(`The ${toy.name} costs $${toy.price}`)
    }
}

const watergun = {
    type: "supersoaker",
    name: "G8",
    color: "darkRed",
    size: "little",
    price: 5

}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1


toyObject.id = idForNewToy
toys.push(toyObject)

}

addToyToInventory(watergun)

for (const toy of toys) {
    console.log(`The ${toy.type} costs $${toy.price} and is ${toy.name} it's ${toy.id} number.`)
}

console.log(toys)

//New Code for the Perry Scope


const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of inventory) {
        let availableForPurchase = false

        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
    }

    if (availableForPurchase) {
        console.log("Enjoy your new Perry Scope")
    }
}

sellPerryScope()