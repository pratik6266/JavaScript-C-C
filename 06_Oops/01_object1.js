// const user = {
//   username: "Pratik Raj",
//   logincount: 8,
//   signedin: true,

//   getUserDetails: function (){
//     console.log(`username: ${this.username}`); //! this is important to tell about the current context 
//   }
// };

// console.log(user);
// user.getUserDetails();

function updateDetails (username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const one = new updateDetails("Pratik", 12, true);
const two = new updateDetails("Raj", 13, false); //! not using the new keyword will overwrite the current data

console.log(one);
console.log(two); 

