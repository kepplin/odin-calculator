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
function operate(operator, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
      case '+':
        return calcAdd(num1, num2)
      case '-':
        return calcSubtract(num1, num2)
      case '×':
        return calcMultiply(num1, num2)
      case '÷':
        if (num2 === 0) return null
        else return calcDivide(num1, num2)
      default:
        return null
    }
  }