"use strict";
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
    if (greetingElement) {
        greetingElement.textContent = `Hello, my name is ${student.name} and I am ${student.age} years old, and in Grade ${student.grade}!`;
    }
}
//calling the function
displayStudentInfo(student);
