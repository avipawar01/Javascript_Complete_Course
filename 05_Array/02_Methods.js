const fruits = ["banana", "orange", "apple", "mango"];

// length
let size = fruits.length;
console.log(size);


function print(fruits){
    for(let i=0;i<fruits.length;i++){
        console.log(fruits[i]);
    }
}

print(fruits);

// 1.  Mutator Methods (Modify the original array):
// i) push() : 
fruits.push("jackfruit");

console.log(fruits);


// ii) pop() :
fruits.pop();

console.log(fruits);


// iii) splice()
fruits.splice(1, 2);
console.log(fruits);


// iv) shift
fruits.shift();
console.log(fruits);

// v) unshift
fruits.unshift("cherry", "papaya");
console.log(fruits);

// vi) sort()
console.log([11,2,22,1].sort((a, b) => a - b));
fruits.sort();
console.log(fruits);

// vii) reverse()
fruits.reverse();
console.log(fruits);


// Accessor Methods (Return new values/arrays, do not modify the original array):

// i) concat
const names = ["shubham", "avinash", "satish"];
console.log(names);

const newArray = names.concat(fruits); 

console.log(newArray);


// ii) slice
const sliceArr = newArray.slice(1, 2);
console.log(sliceArr);


// console.log(newArray.indexOf("satish"));



// Iterable

const numbers = ["avinash", "shubham", "satish"];

numbers.forEach(num => {
  console.log("Mr. " + num);   // Just prints each number doubled
});
// Output: 2, 4, 6


// Map

const numbers1 = [1, 2, 3];

const doubled = numbers1.map(num => num + 2);
console.log(doubled);  


// filter

const numbers3 = [1, 2, 3, 4, 5];

const evens = numbers3.filter(num => num % 2 === 0);
console.log(evens);  


// find
const numbers4 = [1, 5, 10, 15];

console.log(numbers4.find(num => num > 10));  

