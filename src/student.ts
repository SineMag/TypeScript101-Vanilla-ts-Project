//defining the type for 'Grade'

type Grade = "A" | "B" | "C" | "D" | "F";

//interface with properties of the student
interface Student{
    name: string,
    age: number,
    grade: string
};
// 
 const student:Student = {
      name: "Sinenhlanhla",
      
      age: 29,
      grade: "A"
    };


     //student two
     const studentTwo:Student = {
      name: "Joe",
      age: 27,
      grade: "B"
    };


    //the function that takes an argument and updates the HTML element
    function displayStudentInfo(student: Student): void {
      const greetingElement = document.getElementById("greeting");
      if(greetingElement){
      greetingElement.textContent = `Hello, my name is ${student.name} and I am ${student.age} years old, and in Grade ${student.grade}!`;
    }
    }


    //calling the function
   
    displayStudentInfo(student);

