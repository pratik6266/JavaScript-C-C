let a = 300; //? this will stay the same at the global scope

if(true){ //todo can acces the data which is outside the scope or the globle data
  let a = 1;  //** only changes the data or assume it to be it only inside the scope
  const b = 2;
  var c = 3;
}

// console.log(a); 
// console.log(b); 
// console.log(c); //! only var allows the data to be printed outside the scope and also it alter the existing one through the scope


//** closure means the child and access the data of its global */;

function one(){
  let name = "Pratik Raj";
  function two(){
    let surname = "shah";
    console.log(name); //? this can access because it is global for him
  }
  // console.log(surname); //! outside the scope cannot access
  two();
}

// one();

// console.log(addone(3)); //? This can be accessed because this function is declared as a function ans hoisting reverse memory of function with its defenition
function addone(num){
  return num+1;
}

// console.log(fun(3)); //! This cannot be acessed because the function is in a variable and it is undefined as of you yet because of hoising
const fun = function addtwo(num){
  return num+2;
}