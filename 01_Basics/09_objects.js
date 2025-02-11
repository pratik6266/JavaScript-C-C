//singleton

// Object.create  // this create singleton object

// object literal

// const mysym = Symbol("my symbol"); // symbol is used to create unique value

// const user = {
//   name : "Pratik ",
//   "full name" : "Pratik raj",
//   [mysym]: "Heloo",  // use bracket to declate symbol
//   //mysum: mysym, // stores symbol under mysum
//   age : 22, 
//   location : "india", 
//   islogin : false
// };

// console.log(user);

// console.log(user.name); // .key can be used to access the value of the key
// console.log(user["full name"]); // ["key"] can be used to access the value of the key but when key is in string
// console.log(user.mysum); // symbol is used to create unique value

// user.age = 23;
// console.log(user);
// Object.freeze(user);  // freeze the object so that no one can change the value of the object
// user.age = 25; // value will not get updated
// console.log(user);

// user.greeting = function (){
//   console.log("Hello user");
// }

// user.greetinguser = function (){
//   console.log(`Hello ${this["full name"]}`);
// }

// console.log(user.greeting());
// console.log(user.greetinguser());


// const tinder = new Object();  // create empty object
// console.log(tinder);  //  {} empty object

// tinder.id = "123abc";
// tinder.user = "Pratik Raj";
// tinder.islogged = false;

// console.log(tinder);

// const regularuser = {
//   email: "some@gmail.com",
//   fullname: {
//     firstname : "Pratik",
//     lastname : "Raj",
//   },
// };

// console.log(regularuser.fullname?.firstname); // ! way to access and ? for check if exits or not

// const obj1 = {
//   1 : "a", 
//   2 : "b"
// };

// const obj2 = {
//   3 : "c", 
//   4 : "d",
// };



// const obj3 = Object.assign({}, obj1, obj2); // merge two object
// const obj3 = {...obj1, ...obj2}; // ** best way to merge two object
// console.log(obj3);  
// console.log(Object.keys(obj3)); // ? get all the keys of the object
// console.log(Object.values(obj3)); // ? get all the values of the object
// console.log(Object.entries(obj3)); // ! a array of all key and value pair

// ******************** more on object **********************//


const course = {
  name: "jshindi", 
  price: 1000,
  teacher: "hitesh"
};

// console.log(course.teacher);

const {teacher: t} = course; // ? destructuring the object
console.log(t); //! symtax sugar