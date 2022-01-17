// Class code examples

/**
 * We are going to put old code here


// Strings are any character between quotes

const myString = "Hello, my name is Marco"

console.log("indexing string at 2: ", myString[2])

const greetign = "Hello, my name is "
const person =  "Marco"
const city = "Naples"

console.log(
    greetign + person
)

// Sting template
console.log(`
This is a string template.
And can use a graphical view.
`)

console.log(`Hello, my name is ${person}
and I come from ${city}`, "\n")
// recrete the same string above but with + concatenation
console.log("Hello, my name is " + person + "\n" + " and I come from " + city)


const myChar = myString.charAt(5) // myString[5]

console.log(myChar)

const mySubstring = myString.substring(2,7)
console.log(mySubstring.length)

*/

let aNumber = 93
let aDivisor = 8

console.log("round: ",  Math.round(aNumber / aDivisor) )

console.log("ceil: ", Math.ceil(aNumber / aDivisor) )

console.log("floor: ", Math.floor(aNumber / aDivisor) )

console.log("modulo",  aNumber % aDivisor)

console.log(aNumber += 2) // Same as aNumber = aNumber + 2
console.log(aNumber *= 4) // Same as aNumber = aNumber * 4
console.log(aNumber++) // Same as aNumber = aNumber + 1