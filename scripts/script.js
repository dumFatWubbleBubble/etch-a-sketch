
/* Container Reference */
const container = document.querySelector('.container');


const btn = document.createElement('button');

btn.className = 'btn';

document.body.appendChild(btn);


btn.textContent = 'Alter Grid Size';


btn.addEventListener('click' , () => {
  createGrid(prompt("How many rows do you want?"), prompt("How many columns do you want?"));
})

/* Create grid */
function createGrid(rows, columns) {



container.style.display = 'grid';
container.style.position = 'absolute';
container.style.width = '100%'
container.style.height = '80%' 
container.style.top = '15%'

container.style['grid-template-rows'] = `repeat(${rows}, 1fr)`
container.style['grid-template-columns'] = `repeat(${columns}, 1fr)`

const totalSections = rows * columns;

createGridDivs(totalSections)
}

/* Create grid divs  */


function createGridDivs(totalSections) {


for (let i = 0; i < totalSections; i++) {
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







