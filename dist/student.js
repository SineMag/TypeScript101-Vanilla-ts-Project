"use strict";
let Grade = "A";
;
// 
const student = {
    name: "Sinenhlanhla",
    age: 29,
    grade: "A"
};
//student two
const studentTwo = {
    name: "Sinenhlanhla",
    age: 29,
    grade: "A"
};
//the function that takes an argument and updates the HTML element
function displayStudentInfo(student) {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Hello, my name is ${student.name} ${student.age} and I am ${student.grade} years old.!`;
}
//calling the function 
displayStudentInfo(student);
