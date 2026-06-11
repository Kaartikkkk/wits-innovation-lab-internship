let count = 0;

function updateDisplay() {

    document.getElementById("count").textContent = count;
}

function increaseCount() {

    count++;

    updateDisplay();
}

function decreaseCount() {

    count--;

    updateDisplay();
}

function resetCount() {

    count = 0;

    updateDisplay();
}