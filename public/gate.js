// const hoverable3 = document.getElementById('hoverable3');
// const hoverBox3 = document.getElementById('hoverBox3');

// hoverable3.addEventListener('mouseover', () => {
//   hoverBox3.style.display = 'block';
// });

// hoverable3.addEventListener('mouseout', () => {
//   setTimeout(() => {
//     if (!hoverBox3.matches(':hover')) {
//       hoverBox3.style.display = 'none';
//     }
//   }, 1000); // Delay hiding the box to allow moving the mouse to the box
// });

// hoverBox3.addEventListener('mouseover', () => {
//   hoverBox3.style.display = 'block';
// });

// hoverBox3.addEventListener('mouseout', () => {
//   hoverBox3.style.display = 'none';
// });





const hoverable3 = document.getElementById('hoverable3');
const hoverBox3 = document.getElementById('hoverBox3');

hoverable3.addEventListener('mouseover', () => {
  hoverBox3.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!hoverBox3.contains(event.target) && event.target !== hoverable3) {
    hoverBox3.style.display = 'none';
  }
});
