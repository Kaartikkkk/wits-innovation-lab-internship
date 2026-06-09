console.log("=== FUNCTIONS ===");

function greet(name) {
    return `Hello ${name}`;
}

function add(a, b) {
    return a + b;
}

function square(num) {
    return num * num;
}

function isEven(num) {
    return num % 2 === 0;
}

function getLength(str) {
    return str.length;
}

console.log(greet("Kartik"));
console.log(add(10, 20));
console.log(square(5));
console.log(isEven(12));
console.log(getLength("JavaScript"));