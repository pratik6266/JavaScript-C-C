const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.id === 'one')
      body.style.backgroundColor = 'red';
    else if(e.target.id === 'two')
      body.style.backgroundColor = 'blue';
    else if(e.target.id === 'three')
      body.style.backgroundColor = 'green';
    else if(e.target.id === 'four')
      body.style.backgroundColor = 'yellow';
    else if(e.target.id === 'five')
      body.style.backgroundColor = 'orange';
    else if(e.target.id === 'six')
      body.style.backgroundColor = 'pink';
  })
})