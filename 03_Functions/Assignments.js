// 1. Create a function Greet using first Name and Last Name 
// Hello, I am Shubham Yeram, Nice to meet you

function greet  (fname,lname)  {
    console.log("Hello, I am "  +fname + " " +lname +", Nice to meet you"); 
} 

greet("Avinash" ,"pawar")

// Example: Write both forms for a function that adds two numbers.
// 1. Function Declaration
   
    function addnumber(a,b){
        return a+b;
    }
  console.log(addnumber(10,20));

  //2. Function Expression
   const addnumbers = function(a,b){
    return a+b;
   }
   console.log(addnumbers(7,9));

 //Extra: The same can also be written as an Arrow Function Expression:  

 const addNumbers =(a,b) => a+b;

 console.log(addNumbers(5,7));

 // 3.Default Parameters
 // Write a function multiply(a, b) where b has a default value of 1.

 function multiply(a, b=1){
    return a*b;
 }
 console.log(multiply(1,5));