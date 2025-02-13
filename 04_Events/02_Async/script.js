// function set(){
//   document.querySelector('h1').innerText = "Best JS Series";
// }
let num = 0;
let me;

const one = document.getElementById('start');
one.addEventListener('click', (e) => {
  me = setInterval((str) => {
    document.querySelector('h1').innerText = str + " " + num;
    num++;
  }, 1000, "Pratik Raj")
  document.getElementById('result').innerHTML = "STARTED";
})

const but = document.getElementById('stop');
but.addEventListener('click', (e) => {
  clearInterval(me);
  document.getElementById('result').innerHTML = "STOPPED";
})

