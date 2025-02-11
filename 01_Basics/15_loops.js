// for(let i = 1;i <= 10;i++){
//   if(i == 5) break;
//   console.log(i);
// }


// const arr = [1, 2, 3];
// for(let i = 0;i < arr.length;i++){
//   console.log(arr[i]);
// }   

//learn about for loop and break and continue statements now time for while loop

// let i = 1;
// let n = 5;
// while(i <= n){
//   console.log(i);
//   i++; //! this increment is important here there is not auto increment like for loops
// }

// do{
//   console.log(i);
//   i++;
// }while(i <= n); //todo this is do while loop and will run for atleast one time and then after it checks the condition


//* ************* special loops for array **********************//

// const arr = ["batman", "superman", "ironman", "spiderman", "aquaman"];
// for (const i of arr){ // for of loop just like the for each loop of cpp
  // console.log(i);
// }


// maps

// const maps = new Map();
// maps.set("Bihar", "Patna");
// maps.set("West Bengal", "Kolkata");

// for(const [key, value] of maps){ // ? a way to access the key and value pair of maps seperately
//   console.log(`${value} is capital of ${key}`);
// }


// const myobj = {
//   js : 'javascript',
//   cpp: 'c plus plus',
//   py: 'python'
// };

// for(const key in myobj){ // for in loop for ojbects traversal //! if used in array it will return the index as you understand but can be used easily not work for maps  
//   console.log(key + "  :-   " + myobj[key]); 
// }


//for each loops for array

// const arr = ["batman", "superman", "ironman", "spiderman", "aquaman"];
// arr.forEach((ele, index, arr) => {
//   console.log(ele, index, arr);
// });

// const mycode = [
//   {
//     name: "javascript",
//     ext: "js"
//   }, 
//   {
//     name: "c++",
//     ext: "cpp"
//   },
//   {
//     name: "python",
//     ext: "py"
//   }
// ];

// mycode.forEach((ele) => { //? iterating over array of objects
//   let one, two;
//   for(const key in ele){
//     if(!one) one = ele[key];
//     else two = ele[key];
//   }
//   console.log(`${two} is the extension of ${one}`);
// })

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newarr = arr.filter((num) => { // user to filer data from array easy and simple and be done through for each or any traversal and if as well
//   return num > 4;
// });

// console.log(newarr);

// const newarr = arr.map((ele) => (ele + 10)  // go through every element and return after doing some operation 
//  // return ele + 10;
// );
// console.log(newarr); 

// const newarr = arr.map((num) => (num*10)).map((num) => (num+1)).filter((num) => (num > 40)); // .map and .filer can be used on each other any no. of time

// console.log(newarr);  

const sum = arr.reduce((acc, curr) => (acc + curr), 0);

console.log(sum);