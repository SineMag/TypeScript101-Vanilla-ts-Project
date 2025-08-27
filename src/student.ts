let Grade:string ="A";

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
      name: "Sinenhlanhla",
      age: 29,
      grade: "A"
    };


    //the function that takes an argument and updates the HTML element
    function displayStudentInfo(student) {
      const greetingElement = document.getElementById("greeting")!;
      greetingElement.textContent = `Hello, my name is ${student.name} ${student.age} and I am ${student.grade} years old.!`;
    }


    //calling the function 
    displayStudentInfo(student);

