// const arr = [1, 2, 3, 4, 5];    // one way to declare array

// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arr[0]); // 1 
// console.log(arr.length); // 5

const arr = new Array("IronMan", "Thor", "Hulk", "captainAmerica", "blackWidow"); // a diff way to declare array using constructor

// **** Methods of Arrya *****

// arr.push("Hawkeye"); // add element at the end of the array
// arr.pop(); // remove element from the end of the array
// arr.unshift("Wanda") // add element at the beginning of the array
// arr.shift(); // remove element from the beginning of the array
// console.log(arr.includes("Hulk")); // check if element is present in the array

// const newarr = arr.join(); // converts the org array into string with comma separated values
// console.log(newarr); // IronMan,Thor,Hulk,captainAmerica,blackWidow

// console.log(arr); 

// const arr1 = arr.slice(1, 4); // this create a new array from the orginal array and take data from start and end - 1
// console.log(arr1);

// const arr2 = arr.splice(0, 2); // this takes dat from start to end -1 but also removes all that from the orignal array
// console.log(arr2);
// console.log(arr);



const arr2 = ["superman", "batman", "flash", "aquaman", "wonderwoman"];

// arr.push(arr2);
// console.log(arr); // push a arrya not all the data of arr2 one by one
// let arr3 = arr.concat(arr2); // this will add all the data of arr2 one by one
// console.log(arr3);

// const allhero = [...arr, ...arr2]; // this is a new way to add all the data of arr2 one by one called spread operator
// console.log(allhero);

const another = [1, 2, 3, [4, 5, 6], 7,[8, 9, 10, [11, 12]]];
const anotherarrya = another.flat(Infinity);
// console.log(anotherarrya); // this will convert the nested array into single array

// console.log(Array.isArray("Pratik")); // check is array or not
// console.log(Array.from("Pratik")); // converts it inot array
// console.log(Array.from({name: "Pratik"})); // return empty array as will not be able to convert object into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // this will convert the data into array   

