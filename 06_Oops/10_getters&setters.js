// class user{
//   constructor(name, pass){
//     this.userName = name
//     this.password = pass;
//   }

//   get userName(){
//     return this._userName.toUpperCase();
//   }
//   set userName(value){
//     this._userName = value;
//   }

//   get password (){
//     return this._password.toUpperCase();
//   }
//   set password(value){
//     this._password = value;
//   }
// }

// const chai = new user("pratik raj", "abc");
// console.log(chai.password);
// console.log(chai.userName);

// another but old way

function user (name, pass){
  Object.defineProperty(this, 'userName', { // first define setter and getter then update create variable
    get: function (){
      return this._userName.toUpperCase();
    },
    set: function (value){
      this._userName = value;
    }
  });

  this.userName = name
  this.password = pass;
}

const one = new user("Pratik Raj", 123);
console.log(one.userName);