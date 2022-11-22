const prevDisplay = document.querySelector('.prevDisplay');
const currentDisplay = document.querySelector('.currentDisplay');
const inputButton = document.querySelectorAll('.inputButton');
const divideButton = document.querySelector('.divideButton');
let result = '';

for(let i = 0; i < inputButton.length; i++){
    inputButton[i].addEventListener('click', function(){
        result = result + inputButton[i].getAttribute("data-num");
        currentDisplay.textContent = result;
        prevDisplay.textContent = result;
    })
    
}

function calcPercent(num1, num2){
    return num1/100 * num2
}
function calcDivide(num1, num2){
    return num1 / num2
}
function calcMultiply(num1, num2){
    return num1 * num2
}
function calcSubtract(num1, num2){
    return num1 - num2
}
function calcAdd(num1, num2){
    return num1 + num2
}
function operate(num1, num2){
    
}
