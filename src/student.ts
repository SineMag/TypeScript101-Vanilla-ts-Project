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


//grouping the consts insdie an Enum.. use th
//PascalCase
const enum Size { Small=1, Medium, Large}
let mySize:Size =Size.Medium;
console.log(mySize);


//Functions
function calculateTax(income:number, taxYear=2022): number {
    
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

//to the function, supply exactly two arguments

calculateTax(10_000);

// Objects
type Employee = {
    readonly id: number,
    name: string;
    retire: (date: Date) =>  void

}
let employee: Employee{
} = { 
    id:1, 
    name: 'Sne',
retire: (date: Date) =>{
    console.log(date);
    
}
};


//DRY Don't Repeat Yourself

//Union Types

//function for converting weight
function kgToLbs(weight:number | string){
    weight.
}

kgToLbs(10);
kgToLbs('10kg');


