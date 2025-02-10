const user = {
  name: "Pratik Raj",
  price: 999,

  welcome: function(){
    console.log(`${this.name} , Welcome to the website`); //this help us to get data in the context of current scope
    // console.log(this); //! giving me the all data in the current scope
  }
}

// user.welcome();
// user.name = "Pratik Shah"; // name changes    
// user.welcome();

// console.log(this); //todo current context here outside node is empty but in browser it referes to the window

// function chai(){
//   let username = "pratik raj"; //! this will not work inside a function
//   console.log(this.username); // this context cannot be use inside the function 
// }

// chai();

// let chai = () => { //? this is a arrow function
//   let username = "pratik raj"; 
//   console.log(this.username); 
// }

// chai();

// let addtwo = (num1, num2) => {
//   return num1 + num2;
// }

//** */ another way for same thing

let addtwo = (num1, num2) => (num1 + num2); // can also wrap around a () and not need to write return in this implicit return format using one line

console.log(addtwo(3, 2));
