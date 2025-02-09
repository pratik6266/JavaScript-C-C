function greet(){ //? fucntin decleartion
    console.log('Hello World');
}

// greet // todo: without () it will not call the function its just a reference

// greet(); // ** function calling      

function add(number1 , number2){
  let num = number1 + number2;
  // console.log(num);  // ? this will just print the data
  return num;
}

// let num = add (6345, 2);
// console.log(num);

function islogged(name = "Raj"){ // ** default value  
  return `${name} just logged`;
}

// console.log(islogged("Pratik")); // ! if argument not passed it will stay undefined


function calculatePrice(...num1){ //todo this is a rest operator and later i will loop through that array that will be generated  
  return num1;
}

// console.log(calculatePrice(200, 300, 400));


const obj = {
  name: "Pratik Raj", 
  age: 18
};

function handleObj(anyobj){
  console.log(`Your name is ${anyobj.name} and your age is ${anyobj.age}`);
}

// handleObj(obj);


function printarr(arr){
  console.log(arr);
}

const arr = [1, 2, 3];
printarr(arr);