const prevDisplay = document.querySelector('.prevDisplay');
const currentDisplay = document.querySelector('.currentDisplay');
const inputButton = document.querySelectorAll('.inputButton');
const divideButton = document.querySelector('.divideButton');
const equalsButton = document.querySelector('.equalsButton');
const operatorButton = document.querySelectorAll('[data-operator]');
const numberButton = document.querySelectorAll('[data-num]');
const clearButton = document.querySelector('.clearButton');
const deleteButton = document.querySelector('.deleteButton');
const decimalButton = document.querySelector('.decimalButton')

//Global variables
let num1 = ""; 
let operator = "";
let num2 = "";

//Current display
numberButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  })
}
)
function handleNumber(number){
  if (num1.length <= 21){
    num1 += number;
    currentDisplay.textContent = num1;
  }
  else if (num1){
    numberButton.addEventListener('click', function(){
      prevDisplay.textContent = `ANS = ${num1}`
    })
  }
}
//Previous display
operatorButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  })
})
function handleOperator(op){
  operator = op;
  num2 = num1;
  prevDisplay.textContent = num2 + operator;
  num1 = "";
  currentDisplay.textContent = "";
}
//Clear button
clearButton.addEventListener('click', () => {
  prevDisplay.textContent = '';
  currentDisplay.textContent = '';
  num1 = '';
})
//Delete button
deleteButton.addEventListener('click', function(){
  num1 = num1.slice(0, currentDisplay.textContent.length - 1)
  currentDisplay.textContent = currentDisplay.textContent.slice(0, currentDisplay.textContent.length - 1)
})
//Equals button
equalsButton.addEventListener('click', operate);
//Decimal button
decimalButton.addEventListener('click', function(){
  currentDisplay.textContent = currentDisplay.textContent + '.'
  num1 = num1 + '.'
})
//Doing the calculation
function calcPercent(num1, num2){
  return (num2 / 100) * num1
}
function calcDivide(num1, num2){
    return num2 / num1
}
function calcMultiply(num1, num2){
    return num1 * num2
}
function calcSubtract(num1, num2){
    return num2 - num1
}
function calcAdd(num1, num2){
    return num1 + num2
}
function operate() {
    num1 = Number(num1)
    num2 = Number(num2)

    switch (operator) {
      case '+':
        num2 = calcAdd(num1, num2)
        break
      case '-':
        num2 = calcSubtract(num1, num2)
        break
      case '×':
        num2 = calcMultiply(num1, num2)
        break
      case '%':
        num2 = calcPercent(num1, num2)
        break
      case '÷':
        num2 = num2.toString(); 
        if (num1 == 0){
          num2 = "Error, you can't divide by 0"
        } else{
          num2 = calcDivide(num1, num2);
        }
        break
    }
    prevDisplay.textContent = "";
    currentDisplay.textContent = num2;
  }