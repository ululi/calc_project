// global variables declared
function myCalc(){
    let btn;
    let answer;
    let body = document.querySelector('body');
    body.addEventListener('click', function (event) {
        if (event.target.nodeName == 'BUTTON') {
            btn = event.target.textContent
            let displayResult = document.getElementById('display-result');
            // output.innerHTML = answer
            if (btn == "+") {
                displayResult.innerHTML = btn
            } else if (btn == "/") {
                displayResult.innerHTML = btn
            } else if (btn == "x") {
                displayResult.innerHTML = btn
            } else if (btn == "-") {
                displayResult.innerHTML = btn
            } else if (btn == "1") {
                displayResult.innerHTML = btn
            } else if (btn == "2") {
                displayResult.innerHTML = btn
            } else if (btn == "3") {
                displayResult.innerHTML = btn
            } else if (btn == "4") {
                displayResult.innerHTML = btn
            } else if (btn == "5") {
                displayResult.innerHTML = btn
            } else if (btn == "6") {
                displayResult.innerHTML = btn
            } else if (btn == "7") {
                displayResult.innerHTML = btn
            } else if (btn == "8") {
                displayResult.innerHTML = btn
            } else if (btn == "9") {
                displayResult.innerHTML = btn
            } else if (btn == "0") {
                displayResult.innerHTML = btn
            } else if (btn == ".") {
                displayResult.innerHTML = btn
            } else if (btn == "=") {
                displayResult.innerHTML = btn
            }
            
        }
    });
}
myCalc();