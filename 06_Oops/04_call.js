function setUserName(userName){
  this.userName = userName
}

function createUser(userName, email, password){
  setUserName.call(this, userName); //! now using call and giving this will pass on the context that changes should be done in this contest

  this.email = email,
  this.password = password
}

const chai = new createUser("chai", "chai@google.com", 123);
console.log(chai);