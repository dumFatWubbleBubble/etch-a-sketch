
/* Container Reference */
const container = document.querySelector('.container');


const btn = document.createElement('button');

btn.className = 'btn';

document.body.appendChild(btn);


btn.textContent = 'Alter Grid Size';


/* btn.addEventListener('click' () => {
  
})

/* Create grid */
/* container.style.display = 'grid';
container.style.position = 'absolute';
container.style.width = '100%'
container.style.height = '80%' */ 


/* Create grid divs  */

createGridDivs();
function createGridDivs(rows, columns) {


for (let i = 0; i < 256; i++) {
  /* loop scope */
  const gridSquare = document.createElement('div');
  gridSquare.className = 'grid-square';

  container.appendChild(gridSquare);

  gridSquare.addEventListener('mouseenter', (e) => {
    gridSquare.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
  })

}

return true; 
}







