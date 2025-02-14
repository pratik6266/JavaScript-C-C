// const promiseone = new Promise((resolve, reject) => { //todo takes two parameter resolve and reject
//   setTimeout(() => {
//     console.log("Completed the async task");
//     resolve(); //? has to call this 
//   }, 2000);
// });

// promiseone.then(() => { //! then is directly assosiated with me resolve
//   console.log("Promise Consumed"); //* if it is consumed then show this
// })

// better way to write the whole above code

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task 2 Exectued");
//     resolve();
//   }, 1000)
// }).then(() => {
//   console.log("Async Task 2 Resolved")
// })

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "Pratik Raj", 
//       email: "pratikraj220011@gmail.com",
//       phone: "9693894120"
//     });
//   })
// })

// promise3.then((user) => {
//   console.log(user);
// })

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if(!error){
//       resolve({
//         name: "Pratik Raj",
//         age: "18"
//       })
//     }
//     else{
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// })

// promise4.then((data) => {
//   console.log(data.name);
// }).catch((data) => {
//   console.log(data);
// }).finally(() => {
//   console.log("Finally always get executed");
// })

//* doing same thing but this time using async await

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if(!error){
//       resolve({
//         name: "JavaScript",
//       })
//     }
//     else{
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// })

// async function handle5(){
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handle5();

// async function getall () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users'); //? a good way to get data from the api
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error: ", error);
//   }
// }

// getall();

// doing the samething as above but this time using then and catch

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})