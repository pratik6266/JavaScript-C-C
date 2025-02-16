// console.log(Object.getOwnPropertyDescriptor(Math, "PI")); //got it

const user = {
  name: "Raaz",
  price: 10
}

// console.log(user);

const des = Object.getOwnPropertyDescriptor(user, "name");

Object.defineProperty(user, 'name', {
  writable: false,
  enumerable: false
})

console.log( Object.getOwnPropertyDescriptor(user, "name")); // updated the value of property of a data