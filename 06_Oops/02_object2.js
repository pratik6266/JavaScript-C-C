function createUser (userName, score){
  this.userName = userName
  this.score = score

  this.fun = () => {
    console.log(`${this.userName} has a score of ${this.score}`);
  }
}


createUser.prototype.increament = function() { //! don't use arrow function because they don't bind with their own this
  this.score++;
}
createUser.prototype.printMe = function() {
  console.log(this.score);
}

const newUser1 = new createUser("Pratik Raj", 611);

newUser1.fun();
newUser1.increament();
newUser1.printMe();