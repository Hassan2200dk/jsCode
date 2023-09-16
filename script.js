let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

let newNames = names.filter(n=> n.length>=3)

for (let index = 0; index < names.length; index++) {
    const element = names[index].toUpperCase()
    //console.log(element);
    
}

const element2 = names.map(names=>names.toUpperCase())
console.log(element2)

console.log();