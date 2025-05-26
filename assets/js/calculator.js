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

