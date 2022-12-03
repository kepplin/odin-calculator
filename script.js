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
let removeDot;
//Current display
numberButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  })
})

function handleNumber(number) {
  console.log('handleNumber', num1, operator, num2, '->', number)
  if (num1.length <= 21) {
    num1 += number;
    currentDisplay.textContent = num1;
  }
  if (operator === '=') {
    num2 = ''
  }
  console.log('handleNumber END', num1, operator, num2)
}
//Previous display
operatorButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  })
})

function handleOperator(op) {
  console.log('handleOperator', num1, operator, num2, '->', op)
  if (num1 == '' && num2 == '') {
    num1 = '';
  } else if (operator == '' && num2 !== '') {
    num2 = ''
  } else if (num2 === "") {
    num2 = num1;
    operatorCheck(op);
  } else if (num1 === "") {
    operatorCheck(op);
  } else {
    operate();
    operator = op;
    currentDisplay.textContent = "0";
    prevDisplay.textContent = num2 + " " + operator;
  }
  console.log('handleOperator END', num1, operator, num2)
}

function operatorCheck(text) {
  operator = text;
  prevDisplay.textContent = num2 + " " + operator;
  currentDisplay.textContent = "0";
  num1 = "";
}
//Clear button
function clearCalc() {
  prevDisplay.textContent = '';
  currentDisplay.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
}
clearButton.addEventListener('click', clearCalc)
//Delete button
function deleteCalc() {
  num1 = num1.slice(0, currentDisplay.textContent.length - 1)
  currentDisplay.textContent = currentDisplay.textContent.slice(0, currentDisplay.textContent.length - 1)
}
deleteButton.addEventListener('click', deleteCalc)
//Equals button
function equalsCalc() {
  if (num1 != '' && num2 != '') {
    operate()
    console.log('equalsCalc END', num1, operator, num2)
    operator = '='
  }
}
equalsButton.addEventListener('click', equalsCalc)
//Decimal button
function decimalCalc() {
  if (num1.includes('.') == false) {
    currentDisplay.textContent = currentDisplay.textContent + '.'
    num1 = num1 + '.'
  }
}
decimalButton.addEventListener('click', decimalCalc)
//Doing the calculation
function calcPercent(num1, num2) {
  return (num2 / 100) * num1
}

function calcDivide(num1, num2) {
  return num2 / num1
}

function calcMultiply(num1, num2) {
  return num1 * num2
}

function calcSubtract(num1, num2) {
  return num2 - num1
}

function calcAdd(num1, num2) {
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
      if (num1 == 0) {
        num2 = "Error, you can't divide by 0"
      } else {
        num2 = calcDivide(num1, num2);
      }
      break
  }
  num2 = roundNum(num2)
  prevDisplay.textContent = "";
  currentDisplay.textContent = num2;
  num1 = '';
}
//Round Number
function roundNum(num) {
  return Math.round(num * 1000000) / 1000000;
}
//Event listeners for key presses
window.addEventListener('keydown', removeDot = function(e) {
  switch (e.key) {
    case "7":
      handleNumber(7)
      break
    case "8":
      handleNumber(8)
      break
    case "9":
      handleNumber(9)
      break
    case "4":
      handleNumber(4)
      break
    case "5":
      handleNumber(5)
      break
    case "6":
      handleNumber(6)
      break
    case "1":
      handleNumber(1)
      break
    case "2":
      handleNumber(2)
      break
    case "3":
      handleNumber(3)
      break
    case "0":
      handleNumber(0)
      break
    case ")":
      handleNumber(00)
      break
    case "Delete":
      clearCalc();
      break
    case "+":
      handleOperator('+')
      break
    case "-":
      handleOperator('-')
      break
    case "*":
      handleOperator('×')
      break
    case "/":
      handleOperator('÷')
      break
    case "%":
      handleOperator('%')
      break
    case ".":
      decimalCalc();
      break
    case "Backspace":
      deleteCalc();
      break
    case "Enter":
      e.preventDefault();
      equalsCalc();
      break
  }
}, true)
