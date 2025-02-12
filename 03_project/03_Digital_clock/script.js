const block = document.getElementById('clock');


setInterval(() =>{
  let time = new Date();
  let dis = (time.toLocaleTimeString());
  block.innerHTML = dis;
}, 1000);