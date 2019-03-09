var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");
var btn = document.getElementById("btn");

window.onload = function(){
    css.textContent = window.getComputedStyle(document.body ,null).getPropertyValue('background')+";";
    css.textContent +="\t colors : "+ color1.value+" "+color2.value+";"+document.body.style.backgroundColor;
};

function SetGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value + ", " + color2.value +")";
    css.textContent = body.style.background+";";
}

color1.addEventListener("input", SetGradient);

color2.addEventListener("input", SetGradient);   


//RANDOM BACKGROUND
//generates a random color number
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
btn.onclick = function(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    SetGradient();
}