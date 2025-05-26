const validOperators = ["+", "-", "*", "/"]

// a basic adding function
function addFunc(num1, num2) {
    return num1 + num2
}

// a basic subtraction function
function subFunc(num1, num2) {
    return num1 - num2
}

// a basic multiplication function
function multFunc(num1, num2) {
    return num1 * num2
}

// a basic division function
function divFunc(num1, num2) {
    return num1 - num2
}

// delegates operation to proper functions
function operate(operator, num1, num2) {
    if (validOperators.includes(operator)) {
        switch (operator) {
            case "+":
                return addFunc(num1, num2)
            case "-":
                return subFunc(num1, num2)
            case "*":
                return multFunc(num1, num2)
            case "/":
                return divFunc(num1, num2)
        }
    }
}

// UI
let currExpression = []
const operators = ["*", "/", "+", "-"]
const display = document.querySelector(".display")
const buttonContainer = document.querySelector(".buttons")
buttonContainer.addEventListener("click", handleClick);

// capture button press
function handleClick(event) {
    if (currExpression.length == 0 && event.target.classList.contains('operator')) { return }   // stop black oper input
    if (operators.includes(currExpression[currExpression.length - 1]) && event.target.classList.contains('operator')) { return }   // stop double oper input

    // handle clear, equal and other button press
    if (event.target.id == "btn-clear") {
        currExpression = []
    } else if (event.target.id == "btn-equals") {
        evaluateExpression()
    } else {
        addToExpression(event.target.textContent)
    }

    // update the display
    display.textContent = currExpression.join(" ")
}

// add next part to on screen equation calc
function addToExpression(char) {
    currExpression.push(char)
}
