function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

let me;
document.getElementById('start').addEventListener('click', () => {
  me = setInterval(() => {
    document.body.style.backgroundColor = (getRandomHexColor());
  }, 1000);
  document.getElementById('result').innerHTML = "Started";
})

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(me);
  document.getElementById('result').innerHTML = "Stoped";
})