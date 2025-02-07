console.log("2" == 2); // true because == convert the data type thatswhy it is inconsistent for diff data types
console.log("2" === 2); // where as === don't changes the data type first ti checks the data types and then the data

/*
primite data types: string, number, boolean, undefined, null, symbol, bigint,  get stack,

non-primitive data types: object, array, function always get heap memory
data type are gnenerally object and function
*/

// primitive data types passes as reference so don't change the original value

let obj = {
  id : 1, 
  name : "Rahul"
}

let obj2 = obj;

obj2.name = "Rohit"; // pass by reference so it will change the original value

console.log(obj.name); // Rohit
console.log(obj2.name); // Rohit

// function 

function fun(){ // created a function 
  console.log("Hello"); 
}

fun(); // calling the function  
