console.log("=== PROJECT TRACKER ===");

const projects = [

    {
        name: "AgroSmart",
        status: "Completed",
        tech: "React"
    },

    {
        name: "Netflix.IQ",
        status: "Completed",
        tech: "Python"
    },

    {
        name: "MaaSaarthi",
        status: "In Progress",
        tech: "Flask"
    }

];


// map()

const projectNames = projects.map(function (project) {

    return project.name;
});

console.log("Project Names:");
console.log(projectNames);


// filter()

const completedProjects = projects.filter(function (project) {

    return project.status === "Completed";
});

console.log("Completed Projects:");
console.log(completedProjects);


// reduce()

const totalProjects = projects.reduce(function (count) {

    return count + 1;

}, 0);

console.log("Total Projects:");
console.log(totalProjects);