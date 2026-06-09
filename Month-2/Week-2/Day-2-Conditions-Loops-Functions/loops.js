console.log("=== LOOPS ===");

// Counting

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Multiplication Table

let n = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

// Sum

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);

// Countdown

let count = 5;

while (count > 0) {

    console.log(count);

    count--;
}