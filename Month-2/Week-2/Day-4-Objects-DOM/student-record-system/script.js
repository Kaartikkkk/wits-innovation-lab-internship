const students = [];

function addStudent() {

    const name =
        document.getElementById("studentName").value;

    const marks =
        document.getElementById("studentMarks").value;

    if (name === "" || marks === "") {

        alert("Please fill all fields");

        return;
    }

    const student = {

        name: name,

        marks: Number(marks)
    };

    students.push(student);

    displayStudents();
}

function displayStudents() {

    const list =
        document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach(function (student) {

        list.innerHTML += `

            <div class="student-card">

                <h3>${student.name}</h3>

                <p>Marks: ${student.marks}</p>

            </div>

        `;
    });

    console.log(JSON.stringify(students));
}