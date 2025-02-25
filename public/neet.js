// const hoverable2 = document.getElementById('hoverable2');
// const hoverBox2 = document.getElementById('hoverBox2');

// hoverable2.addEventListener('mouseover', () => {
//   hoverBox2.style.display = 'block';
// });

// hoverable2.addEventListener('mouseout', () => {
//   setTimeout(() => {
//     if (!hoverBox2.matches(':hover')) {
//       hoverBox2.style.display = 'none';
//     }
//   }, 1000); // Delay hiding the box to allow moving the mouse to the box
// });

// hoverBox2.addEventListener('mouseover', () => {
//   hoverBox2.style.display = 'block';
// });

// hoverBox2.addEventListener('mouseout', () => {
//   hoverBox2.style.display = 'none';
// });



const hoverable2 = document.getElementById('hoverable2');
const hoverBox2 = document.getElementById('hoverBox2');

hoverable2.addEventListener('mouseover', () => {
  hoverBox2.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!hoverBox2.contains(event.target) && event.target !== hoverable2) {
    hoverBox2.style.display = 'none';
  }
});

