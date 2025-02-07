// const name = "Pratik Raj";
//better way to declare the string
const name = new String("Pratik Raj"); // object of class string
const count = 600;

// console.log(name + " has " + count + " solved question on Leetcode"); // out datae tech

console.log(`${name} has ${count} solved question on Leetcode`); // template literals  called string interpolation 
// all this feature or method are becusae of string class
console.log(name.length);
console.log(name[0]);
let newstring = name.substring(0, 5);
console.log(newstring);

let one = "  sdfas   ";
console.log(one);
console.log(one.trim()); // removes while space from both side

let url = "pratikraj%20gmail.com";
console.log(url.replace('%20', '@'));

let str1 = new String ("one-two-three");
console.log(str1.split('-')); // split the string into array takes seperator and limit as argument