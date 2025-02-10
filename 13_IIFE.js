// * Immediately Invoked Function Expression : IIFE
//? wrap the defenition of function in () to execute and just after it decelaration and use ;

// normal function

(function greet(){
  console.log("hello");
})();

// arrow function

((name) => {
  console.log(`${name} hello`)
})("Pratik Raj");