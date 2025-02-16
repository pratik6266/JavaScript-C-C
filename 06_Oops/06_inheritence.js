class user{
  constructor(name) {
    this.userName = name;
  }

  logme(){
    console.log(this.userName);
  }
}

// const chai = new user("Pratik Raj").logme();

class teacher extends user{
  constructor(name, email, pass){
    super(name); //* super key word call the constructor of parent class
    this.email = email;
    this.password = pass;
  }

  addCourse(str){
    console.log(`${str} has been added by ${this.userName}`);
  }
}

const pk = new teacher("Pratik Raj", "pratik@gmail.com", 1234);
pk.addCourse("DSA");
pk.logme();
stance 
console.log(pk instanceof user); // yes iof both teacher and user 