// class user {
//   constructor (userName, email, password){
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   };

//   encrypt(){
//     return this.password + "abc";
//   };
// };

// const chai = new user("chai", "chai@gmail.com", 123);
// console.log(chai);
// console.log(chai.encrypt());

//? behind the sence

function user (userName, email, password) {
  this.userName = userName
  this.email = email
  this.password = password
};

user.prototype.encrypt = function(){
  return this.password + "abc";
}

const tea = new user ("tea", "tea@gmial.com", 123);
console.log(tea);
console.log(tea.encrypt());