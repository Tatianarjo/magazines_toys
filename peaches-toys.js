// const theSource = {
//     id: 1,
//     cover: "Lil' Kim",
//     issue: 44,
//     color: "pink",

// }

// const Fader = {
//     id: 2,
//     cover: "Nicki Minaj",
//     issue: 417,
//     color: "green"
// }

// const PaperMag = {
//     id: 3,
//     cover: "Solange",
//     issue: 729,
//     color: "yellow"
// }


const magazines = [
    {
        id: 1,
        name: "The Source",
        cover: "Lil' Kim",
        issue: 44,
        color: "pink",
        price: 13.00
    },
    {
        id: 2,
        name: "Fader",
        cover: "Nicki Minaj",
        issue: 417,
        color: "green",
        price: 15.00
    },
    {
        id: 3,
        name:"PaperMag",
        cover: "Solange",
        issue: 729,
        color: "yellow",
        price: 17
    }
]

//now you have all of your objects

// for (const magazine of magazines) {
//     console.log(magazine.price)
// }
//I wanted to see just the price of each magazine


for (const magazine of magazines) {
    console.log(`The new issue ${magazine.issue} of ${magazine.name} featuring ${magazine.cover} is only ${magazine.price}.`)
}

const vogue = {
    id: 4,
    name: "Vogue",
    cover: "Rihanna",
    issue: 1017,
    color: "purple",
    price: 29
}
//I just created a new object
magazines.push(vogue) //now I'm adding it to the end of my array


for(const magazine of magazines) {
    magazine.price = magazine.price + 8

console.log(`The new price of the ${magazine.name} featuring ${magazine.cover} is now $${magazine.price}.`)
}
//now here is where I increased the price by 8