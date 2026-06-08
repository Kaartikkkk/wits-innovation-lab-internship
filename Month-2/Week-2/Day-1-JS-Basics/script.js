function getValues() {

    let num1 = Number(
        document.getElementById("num1").value
    );

    let num2 = Number(
        document.getElementById("num2").value
    );

    return { num1, num2 };
}

function add() {

    let { num1, num2 } = getValues();

    document.getElementById("result").textContent =
        "Result: " + (num1 + num2);
}

function subtract() {

    let { num1, num2 } = getValues();

    document.getElementById("result").textContent =
        "Result: " + (num1 - num2);
}

function multiply() {

    let { num1, num2 } = getValues();

    document.getElementById("result").textContent =
        "Result: " + (num1 * num2);
}

function divide() {

    let { num1, num2 } = getValues();

    if (num2 === 0) {

        document.getElementById("result").textContent =
            "Cannot divide by zero";

        return;
    }

    document.getElementById("result").textContent =
        "Result: " + (num1 / num2);
}