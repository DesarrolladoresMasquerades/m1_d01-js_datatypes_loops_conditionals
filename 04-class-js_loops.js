// Class code examples


const funnySentence = "Hola Ironhackers, computer programming is fun"

for (let cappucino = 1; cappucino < funnySentence.length; cappucino += 2){
console.log(funnySentence[cappucino])    
}

for (let i = 0; i < funnySentence.length; i ++){
    
    let evenOdd 
    if(i % 2 === 0) evenOdd = "odd"
    else evenOdd = "even" 

    console.log("Character " + funnySentence[i], ` is ${evenOdd}`)
}

for(letter of funnySentence){
console.log(letter)
}