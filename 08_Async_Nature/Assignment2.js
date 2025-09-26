// 1.Write a function greet that accepts a name and a callback function. The callback should generate a greeting message using the given name.
// Hello Avinash

function greet(name, callback){
    callback(name);
}


function callback(name){
    console.log("Hello, " + name);
}


greet("Avinash", callback);


// 2.Write a function processNumbers that takes an array of numbers and a callback function. The callback should be applied to each element of the array, and the function should return a new array with the results.

let numbers = [1, 2, 3, 4, 5];

 
function processNumbers(numbers, callback){
    callback(numbers);
}

function callback1(numbers){
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); 
}

processNumbers(numbers, callback1);