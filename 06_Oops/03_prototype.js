let myName = "he is a good    boy ";

String.prototype.truelength = function () {
  let count = 0;
  let str = this
  let n = this.length;
  let s = "";

  for(let i = 0;i < n;i++){
    if(str[i] === ' '){
      if(s.length === 0){
        continue;
      }
      else{
        count += s.length;
        count += 1;
        s = "";
      }
    }
    else{
      s += str[i];
    }
  }

  if(s.length !== 0){
    count += s.length;
    count += 1;
  }

  return count - 1;
}

// console.log(myName.trim().length); //todo can be done via this but this is not the task
console.log(myName.truelength())


//old way of prototypal inheritense

const user = {
  name: "chai"
}

const pass = {
  password: "chai@123",
  // __proto__: user
}

const id = {
  ID: "uni"
}

// pass.__proto__ = id;

// modern way
Object.setPrototypeOf(pass, id);
Object.setPrototypeOf(pass, user);
