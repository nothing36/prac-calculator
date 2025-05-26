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
    return num1 / num2
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
let priorNumber
let displayNumber
let currOperator
const operators = ["*", "/", "+", "-"]
const display = document.querySelector(".display")
const buttonContainer = document.querySelector(".buttons")
buttonContainer.addEventListener("click", handleClick);

// capture button press
function handleClick(event) {
    const target = event.target;

    if (target.id === "btn-clear") {
        priorNumber = null;
        displayNumber = null;
        currOperator = null;
        display.textContent = "";
        return;
    }

    if (target.id === "btn-equals") {
        if (priorNumber !== null && currOperator && displayNumber !== null) {
            displayNumber = operate(currOperator, priorNumber, displayNumber);
            priorNumber = null;
            currOperator = null;
            display.textContent = displayNumber;
        }
        return;
    }

    if (target.classList.contains("operator")) {
        if (displayNumber === null) return;

        if (priorNumber === null) {
            priorNumber = displayNumber;
        } else if (currOperator) {
            priorNumber = operate(currOperator, priorNumber, displayNumber);
        }

        currOperator = target.textContent;
        display.textContent = displayNumber;
        displayNumber = null;
        return;
    }

    // default number input case
    appendNumber(event);
    display.textContent = displayNumber;
}


// build out user's number
function appendNumber(event) {
    if (displayNumber) {
        displayNumber += event.target.textContent
    } else {
        displayNumber = event.target.textContent
    }
}