const prevDisplay = document.querySelector('.prevDisplay');
const currentDisplay = document.querySelector('.currentDisplay');
const inputButton = document.querySelectorAll('.inputButton');
const divideButton = document.querySelector('.divideButton');
const equalsButton = document.querySelector('.equalsButton');
const operatorButton = document.querySelectorAll('[data-operator]')

let result = "";
let num1 = ""; //does nothing
let operator = ""; //does nothing
let num2 = "";

//Calc display
//Current display
for(let i = 0; i < inputButton.length; i++){
    inputButton[i].addEventListener('click', function(){
        result = result + inputButton[i].getAttribute("data-all");
        currentDisplay.textContent = result;  
    })   
    
}
//Previous display
function handleOperator(op){
  operator = op;
  num2 = result;
  prevDisplay.textContent = num2;
  result = "";
  currentDisplay.textContent = "";
}

//num 1
for(let i = 0; i < inputButton.length; i++){
  inputButton[i].addEventListener('click', function(){
      num1 = inputButton[i].getAttribute("data-num");
      if(num1){
        console.log(`num1: ${num1}`)
      }
  })   
}

//operator
for(let i = 0; i < operatorButton.length; i++){
  operatorButton[i].addEventListener('click', function(e){
      operator = operatorButton[i].getAttribute("data-operator");
      if(operator){
        console.log(`operator: ${operator}`)
      }
      handleOperator(operator)
  })   
}



console.log(`num2: ${num2}`);

equalsButton.addEventListener('click', operate());

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