class Calculator{
    constructor(){

    }
    clear(){

    }
    delete(){

    }
    chooseOperator(){

    }
    compute(){

    }
}

// Select all the buttons from the Dom

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalButton = document.querySelector('#equals');

// for each button add an event listener

numberButtons.forEach(button=>{
   button.addEventListener('click',e=>{
       console.log(e.target.textContent)
   })
});
operatorButtons.forEach((operator)=>{
    operator.addEventListener('click',e=>{
        console.log(e.target.textContent)
    })
});
deleteButton.addEventListener('click',e=>{
    console.log(e.target.textContent)
});
clearButton.addEventListener('click',e=>{
    console.log(e.target.textContent)
});
equalButton.addEventListener('click',e=>{
    console.log(e.target.textContent)
});

// create a new class using the constructor function from up above
const calculator = new Calculator()