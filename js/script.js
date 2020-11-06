class Calculator{
    constructor(operandEpressionText) {
        this.operandEpressionText = operandEpressionText
    }
    clear(){
        this.operandEpressionText.innerHTML = ''
    }
    appendNumber(number){
        this.operandEpressionText.innerHTML = number.toString()
    }
}

// Select all the buttons from the Dom

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalButton = document.querySelector('#equals');
const operandEpression = document.querySelector('.display-result')

// create a new class using the constructor function from up above
const calculator = new Calculator(operandEpression)

// for each button add an event listener
numberButtons.forEach(function(button){
    button.addEventListener('click',function(e){
        calculator.appendNumber(e.target.textContent)
    })
})
operatorButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        calculator.appendNumber(e.target.textContent)
    })
})
clearButton.addEventListener('click', function () {
        calculator.clear()
    })

console.log(calculator)