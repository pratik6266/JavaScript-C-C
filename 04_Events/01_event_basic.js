// document.getElementById('owl').addEventListener('click', (e) => {
  // console.log('owl');
//   e.stopPropagation(); //? now it will not propagate to the top through bubbling
// })

// document.getElementById('images').addEventListener('click', (e) => {
  // console.log('images');
// })

//! default false does bubble and used bottom up 
//! where true used top down approach

// document.getElementById('google').addEventListener('click', (e) => {
//   console.log('preventing default');
//   e.preventDefault();
// })

document.getElementById('images').addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG'){
    e.target.parentNode.remove();
  }
})