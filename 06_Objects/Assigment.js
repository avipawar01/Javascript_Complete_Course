// 1.Create an object car with properties: brand, model, and year. Print all the properties.

let properties = {
    brand:"range rover",
    model:"sport",
    year:"2024", 
}
console.log(properties);

// 2.Write a function that takes a person object (name, age, city) and prints a sentence like:
// "John is 25 years old and lives in New York."



const person2 = {
    name:"john",
    age:25,
    city:" lives in New York new york",

}
console.log(person2.name,person2["age"],person2.city);

// 3.Create an object student with properties name and marks.

// Add a new property grade.

// Update the marks property.

// Print the updated object.

let student = {
    name:"Avinash",
    marks:75,
   
}
student.grade ="A";
student.marks = 90,
console.log(student);

//4.Object with Methods
// Create an object calculator with methods:

// add(a, b) → returns sum

// subtract(a, b) → returns difference

// multiply(a, b) → returns product

// divide(a, b) → returns quotient

// Call each method and print the result.

let a = 30;
let b = 20;

function add(){
    console.log(a+b);
}
add();
function sub(){
    console.log(a-b);
}
sub();
function mul(){
    console.log(a*b);
}
mul();
function div(){
    console.log(a/b);
}
div();

// 5.Loop Through Object
// Write a function that takes an object of fruit: price pairs and prints all fruits with their prices using for...in loop.

function printFruitPrices(fruits) {
    for (let fruit in fruits) {
      console.log(fruit + " " + fruits[fruit]);
    }
  }
  
  // Example usage:
  const fruitPrices = {
    apple: 100,
    banana: 40,
    mango: 80,
    orange: 60
  };
  
  printFruitPrices(fruitPrices);