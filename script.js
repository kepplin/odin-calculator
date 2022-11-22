const prevDisplay = document.querySelector('.prevDisplay');
const currentDisplay = document.querySelector('.currentDisplay');
const inputButton = document.querySelectorAll('.inputButton')

for(let i = 0; i < inputButton.length; i++){
    inputButton[i].addEventListener('click', function(){
        currentDisplay.textContent = inputButton[i].getAttribute("data-num");
        prevDisplay.textContent = inputButton[i].getAttribute("data-num");
    })
}
