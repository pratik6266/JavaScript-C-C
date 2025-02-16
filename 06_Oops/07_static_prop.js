class user{
  constructor(user){
    this.userName = user;
  }

  logme(){
    console.log(this.userName);
  }

  static createId(){ // will not give the access to everyone
    return 123;
  }
}

const one = new user("Pratik Raj");
// one.logme();
// console.log(one.createId());  

class teacher extends user{
  constructor(user, email){
    super(user);
    this.email = email;
  }

  logme2(){
    console.log(`${this.userName} has email: ${this.email}`);
  }
}

const two = new teacher("Raaz", "Raaz@gmail.com");
two.logme2();

