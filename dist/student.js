"use strict";
// //defining the type for 'Grade'
// type Grade = "A" | "B" | "C" | "D" | "F";
// //interface with properties of the student
// interface Student{
//     name: string,
//     age: number,
//     grade: string
// };
// // 
//  const student:Student = {
//       name: "Sinenhlanhla",
//       age: 29,
//       grade: "A"
//     };
//      //student two
//      const studentTwo:Student = {
//       name: "Joe",
//       age: 27,
//       grade: "B"
//     };
//     //the function that takes an argument and updates the HTML element
//     function displayStudentInfo(student: Student): void {
//       const greetingElement = document.getElementById("greeting");
//       if(greetingElement){
//       greetingElement.textContent = `Student:  ${student.name}, ${student.age}, ${student.grade}`;
//     }
//     }
//     //calling the function
//     displayStudentInfo(student);
// // Task 7.1: Follow-Up Exercise: Arrays, Objects, Functions & DOM Type Casting
// //Arrays..
// let fruits:string[] = ["apple", "pear", " banana", "kiwi", "pineapple"];
// function fruitsToUpperCase(arr: string[]):void{
//    arr.forEach(fruit => console.log(fruit.toUpperCase()));
// }
// fruitsToUpperCase(fruits);
//Anotation from youtube video
// let sales:number = 123_456_789;
// let course: string = 'TypeScript';
// let isPublish = true;
// //the `any` variable..avoid using it
// let level;
// function render(document){
//     console.log(document); 
// }
// //Arrays
// let numbers:number[] = [];
// numbers.forEach(n => n.toString);
// //Tuples
// let user: [number, string] = [1, 'Sine']
// user.push(1);
//Enum
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2 /* Size.Medium */;
console.log(mySize);
