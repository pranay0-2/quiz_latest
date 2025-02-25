// const hoverable1 = document.getElementById('hoverable1');
// const hoverBox1 = document.getElementById('hoverBox1');

// hoverable1.addEventListener('mouseover', () => {
//   hoverBox1.style.display = 'block';
// });

// hoverable1.addEventListener('mouseout', () => {
//   setTimeout(() => {
//     if (!hoverBox1.matches(':hover')) {
//       hoverBox1.style.display = 'none';
//     }
//   }, 1000); // Delay hiding the box to allow moving the mouse to the box
// });

// hoverBox1.addEventListener('mouseover', () => {
//   hoverBox1.style.display = 'block';
// });

// hoverBox1.addEventListener('mouseout', () => {
//   hoverBox1.style.display = 'none';
// });




const hoverable1 = document.getElementById('hoverable1');
const hoverBox1 = document.getElementById('hoverBox1');

hoverable1.addEventListener('mouseover', () => {
  hoverBox1.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!hoverBox1.contains(event.target) && event.target !== hoverable1) {
    hoverBox1.style.display = 'none';
  }
});

