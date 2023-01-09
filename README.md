# odin-calculator

## See the live demo 👇

https://kepplin.github.io/odin-calculator/

![democalculator](https://user-images.githubusercontent.com/107027281/211231324-74db7e67-801b-49be-939c-1c8047ec285e.png)

## About

This was a project created for [The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator). There were so many bugs which I encountered but most of them should be gone (check the 'Issues' section of this readme for active discovered bugs)

## Instructions

- Press buttons or use keyboard to enter numbers or operators on the screen. 

- Press the '=' button to complete your calculation. However if you have two operands in one string, it will automatically calculate, so if you had '3 + 3 +' it would become '6 +'

- Press the 'AC' button to clear everything on the display

- Press the 'C' button to delete the last character you entered

## How it Works

1. There are 3 global variables: 'num1', 'num2', 'operator'.
2. When a button is clicked it calls one of two functions: handleNumber() if it was a number button, or handleOperator() if it was an operator button. The value of the variable 'num1' becomes the number. If an operator is clicked after a number, the value of 'operator' becomes the operator.
3. When a second number is clicked, the value of 'num2' becomes 'num1', and the value of 'num1' becomes the sedcond number
4. If another operator is clicked after all 3 global variables have values, the operate() function automatically runs. Otherwise it runs after the '=' button is pressed.
5. The textcontent of currentDisplay is purely for num1, while previousDisplay is for the rest of the string.
6. The 'AC' button resets the value of the displays and global variables to '', whereas the 'C' button slices the last character of num1 and currentDisplay.

## Issues

- Cannot subtract negative numbers

- Cannot enter negative number on an empty screen

- Does not follow BODMAS (though this was per the projects instructions)

