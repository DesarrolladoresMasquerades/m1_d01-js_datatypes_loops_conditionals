// Class code examples

if (true){
    console.log("True branch")
}else{
    console.log("False branch")
}



if(true){
    console.log("First branch")
}else if(false){
    console.log("Second branch")
}else{
    console.log("Default branch")
}


const myEnumValue = "catalan"

switch(myEnumValue){
    case "catalan":
    console.log("Language is Catalan")    
    break;
    case "english":
    console.log("Language is English")    
    break;
    default:
        console.log("Language is not in the list")    
}