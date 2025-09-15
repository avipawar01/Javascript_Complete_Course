// 1.Create an empty array. Use push() to add 5 different numbers to it, then print the array.
  let arr = [];
  arr.push("avinash");
  arr.push(2);
  arr.push(true);
  arr.push(null);
  arr.push(Symbol('uniqueId'));
  console.log(arr);

  // 2.Create an array of 5 fruits. Use pop() to remove the last fruit and print the updated array.
  let arr1 = ["banana", "orange", "apple", "mango","jackfruit"];
  arr1.pop();
  console.log(arr1);

  // 3.Start with an array of 4 colors.

// Use shift() to remove the first color.

// Use unshift() to add a new color at the beginning.

// Print the final array.

let arr2=["red","orange","blue","green"];
arr2.shift();
console.log(arr2);

arr2.unshift("pink");
console.log(arr2);



// 4.Write a function that takes an array of numbers and returns a new array where each number is doubled.

const numbers = [1,2,3];
const doubled = numbers.map(num => num + 3);
console.log(doubled); 