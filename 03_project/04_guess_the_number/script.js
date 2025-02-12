let random = ((parseInt(Math.random() * 100 + 1)));
let arr = [];
let highlow = document.getElementById('highorlow');
let previous = document.getElementById('previous');
let span = document.getElementById('leftspan');
let attemptcout = span.innerHTML;


const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  let num = document.getElementById('guesfield').value;
  attemptcout--;
  if(attemptcout == 0){
    highlow.innerHTML = "You Lost, Try Again";
    setTimeout(() => {
      location.reload();
    }, 1000)
  }
  else if(num == random){
    highlow.innerHTML = "You Won..";
    setTimeout(() => {
      location.reload();
    }, 1000)
  }
  else if(num > random){
    highlow.innerHTML = "Guess Smaller";
    arr.push(num);
  }
  else if(num < random){
    highlow.innerHTML = "Guess Greater";
    arr.push(num);
  }
  span.innerHTML = attemptcout;
  let ans = "";
  arr.forEach((ele) => {
    ans += " ";
    ans += ele;
  })
  previous.innerHTML = ans;
})