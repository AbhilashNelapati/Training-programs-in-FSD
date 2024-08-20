let currentNumber = "";
let expression = "";
let resultDisplayed = false;

function appendNumber(num) {
    if (resultDisplayed) {
        clearresult();  // Clear if a result was displayed from the previous calculation
    }
    currentNumber += num;
    expression += num;
    document.getElementById("result").value = expression;
}

function setoperator(op) {
    if (currentNumber === "" && expression === "") return;  // Prevent adding an operator at the start

    if (resultDisplayed) {
        resultDisplayed = false;
    }

    if (currentNumber !== "") {
        expression += op;
        document.getElementById("result").value = expression;
        currentNumber = "";  // Reset current number after an operator is set
    }
}

function calculate() {
    if (currentNumber !== "") {
        try {
            let result = eval(expression);
            document.getElementById("result").value = result;
            expression = result.toString();  // Allow further calculations with the result
            currentNumber = "";
            resultDisplayed = true;
        } catch (error) {
            document.getElementById("result").value = "Error";
            expression = "";
            currentNumber = "";
        }
    }
}

function clearresult() {
    currentNumber = "";
    expression = "";
    document.getElementById("result").value = "";
    resultDisplayed = false;
}

function back() {
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        currentNumber = currentNumber.slice(0, -1);
        document.getElementById("result").value = expression;
    }
}
