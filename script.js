const container = document.querySelector(".container");
let divs ;

const makeGrid = (number) => {
    container.style.setProperty('--grid-rows',number);
    container.style.setProperty('--grid-cols',number);
    for (let i = 1; i <= (number * number); i++) {
        let cell = document.createElement("div");
        let size = ((600 / number) -2).toFixed(2);
        cell.style.width = size + 'px';
        cell.style.height = size + 'px';
        container.appendChild(cell).className = "grid-item";
    };
};
makeGrid(16);
function grid() {
function randomValue(min,max) {
   return Math.floor(Math.random()*(max-min+1))+min;
}
 divs = document.querySelectorAll(".grid-item");


const hovering = (e) => { 
    const r = randomValue(0,255);
    const g = randomValue(0,255);
    const b = randomValue(0,255);
    const rgb = `rgb(${r},${g},${b})`;
    e.target.style.backgroundColor = rgb};
// const notHovering = (e) => { e.target.style.backgroundColor = ""};
divs.forEach(div => div.addEventListener("mouseenter", hovering));
// divs.forEach(div => div.addEventListener("mouseleave", notHovering));
}
grid()

const btnDiv = document.createElement("div");
const btn = document.createElement("BUTTON");
btnDiv.appendChild(btn);
btnDiv.style = `width:100%;
                height:3rem;
                display:flex;
                justify-content:center`;
btn.style = `width:10%;
            height:2rem;
            background-color:rgb(100,115,115);
            border-style:none;
            color:#fff;
            border-radius:1rem;
            outline:none;`
btn.textContent = "Click me!";
container.insertAdjacentElement('beforebegin', btnDiv)


btn.addEventListener('click',promiseGrid)

function promiseGrid() {


function clearGrid() {
    return new Promise((resolve, reject) => {
        
        resolve(divs.forEach(div => container.removeChild(div)));
        
    });
}

clearGrid().then(function() {
    container.style.setProperty('--grid-rows',1);
    container.style.setProperty('--grid-cols',1);
   
}).then(function() {
   return question = prompt("How many squares per side?");
}).then(function(question) {
    makeGrid(parseInt(question));
   grid();
});
}


