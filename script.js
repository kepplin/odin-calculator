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
    num2 = roundNum(num2)
    prevDisplay.textContent = "";
    currentDisplay.textContent = num2;
  }
  //Round Number
  function roundNum(num){
    return Math.round(num * 1000000) / 1000000;
  }
  //Event listeners for key presses
  window.addEventListener('keydown', removeDot = function(e){
    if (e.defaultPrevented){
      return;
    }
    switch (e.key){
      case "7":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 7
          num1 = num1 + 7
        }
        break
      case "8":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 8
          num1 = num1 + 8
        }
        break
      case "9":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 9
          num1 = num1 + 9
        }
        break
      case "4":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 4
          num1 = num1 + 4
        }
        break
      case "5":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 5
          num1 = num1 + 5
        }
        break
      case "6":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 6
          num1 = num1 + 6
        }
        break
      case "1":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 1
          num1 = num1 + 1
        }
        break
      case "2":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 2
          num1 = num1 + 2
        }
        break
      case "3":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + 3
          num1 = num1 + 3
        }
        break
      case "0":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + '0'
          num1 = num1 + '0'
        }
        break
      case ")":
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + '00'
          num1 = num1 + '00'
        }
        break
      case "Delete":
        prevDisplay.textContent = '';
        currentDisplay.textContent = '';
        num1 = '';
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
        if (num1.length <= 21){
          currentDisplay.textContent = currentDisplay.textContent + '.'
          num1 = num1 + '.'
        } 
        // window.removeEventListener('keydown', removeDot);
        break  
      case "Backspace":
        num1 = num1.slice(0, currentDisplay.textContent.length - 1)
        currentDisplay.textContent = currentDisplay.textContent.slice(0, currentDisplay.textContent.length - 1)
        break
      case "Enter":
        operate()
    }
  }, true)