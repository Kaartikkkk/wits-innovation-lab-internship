console.log("=== STUDENT DATA ===");

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python"
];

console.log(skills);

console.log("Total Skills:", skills.length);

skills.push("Node.js");

console.log("After Learning Node.js:");
console.log(skills);

skills.pop();

console.log("After Removing Last Skill:");
console.log(skills);

for (let i = 0; i < skills.length; i++) {

    console.log(skills[i]);
}