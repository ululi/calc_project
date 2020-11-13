class Calculator {
    constructor(currentOperandEpressionText) {
        this.currentOperandEpressionText = currentOperandEpressionText
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.operation = undefined
        this.currentOperandEpressionText.innerHTML = ''
    }
    delete() {
        let stringToDel = this.currentOperand
        if(this.currentOperandEpressionText.innerHTML== '') return
        else if (this.currentOperandEpressionText.innerHTML == this.currentOperand){
            console.log(stringToDel)
        }
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operator) {
        this.currentOperand = this.currentOperand.toString() + operator.toString()
    }
    updateDisplay() {
        this.currentOperandEpressionText.innerHTML = this.currentOperand
    }
    compute() {
        let computation;
        let current = this.currentOperand;
        if (this.currentOperand === current) {
            computation = eval(this.currentOperand);
        }
        this.currentOperand = computation;
    }
}

// Select all the buttons from the Dom

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalButton = document.querySelector('#equals');
const currentOperandEpressionText = document.querySelector('#current-operand')

// create a new class using the constructor function from up above
const calculator = new Calculator(currentOperandEpressionText)

// for each button add an event listener
numberButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        calculator.appendNumber(button.textContent)
        calculator.updateDisplay()
    })
})
operatorButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        calculator.chooseOperation(e.target.textContent)
        calculator.updateDisplay()
    })
})
deleteButton.addEventListener('click', function () {
    calculator.delete()
    calculator.updateDisplay()
})
clearButton.addEventListener('click', function () {
    calculator.clear()
})

equalButton.addEventListener('click', function (e) {
    calculator.compute()
    calculator.updateDisplay()
})