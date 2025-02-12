const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const result = document.getElementById("result");
const judge = document.getElementById("judge");
// console.log(inputs);

button.addEventListener('click', (e) => {
e.preventDefault();
  let weight = Number (inputs[0].value);
  let height = Number (inputs[1].value);
  let data = weight / (height * height);
  result.innerHTML = data.toFixed(2);
  if(data <= 18.6){
    judge.innerHTML = "Under Weight";
  }
  else if(data > 18.6 && data <= 24.9){
    judge.innerHTML = "Normal Range";
  }
  else {
    judge.innerHTML = "Over Weight";
  }
});