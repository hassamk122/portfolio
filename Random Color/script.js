const button = document.getElementById("btn");
const code = document.getElementById("code");
function chanageBgColor(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    code.textContent =`rgba(${red},${blue},${green})`;
 
  document.body.style.backgroundColor = `rgba(${red},${blue},${green})`;

}
button.addEventListener("click",chanageBgColor);