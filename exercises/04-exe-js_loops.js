// Practice loops
/*
Loop from 0 to 15. 
For every number that is divisible by 3 output ‘Fizz’ in the console
For every number that is divisible by 5 output ‘Buzz’ in the console
For every number that is divisible by 3 and 5 output ‘FizzBuzz’ in the console

*/

// 1

for(let i = 0; i<= 15; i++){
    if(i % 5 === 0 && i % 3 === 0  ) {
       console.log("FizzBuzz")
    }
    else if(i % 3 === 0) {
      console.log("Fizz")
    }
    else if( i % 5 === 0 ) {
       console.log("Buzz")
    }
  }
  