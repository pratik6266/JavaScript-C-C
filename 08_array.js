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

console.log(arr); 

const arr1 = arr.slice(1, 4); // this create a new array from the orginal array and take data from start and end - 1
console.log(arr1);

const arr2 = arr.splice(0, 2); // this takes dat from start to end -1 but also removes all that from the orignal array
console.log(arr2);
console.log(arr);
