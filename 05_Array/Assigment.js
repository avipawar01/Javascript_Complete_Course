// 1. Print All Elements

let arr = ["avinash",12,null,true,Symbol('uniqueId')];
   
function print(arr){
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
    }
}
print(arr);


// 2. Find Length of Array

function length(arr){
    var ans = 0;
    for(let i=0; i<arr.length; i++){
        ans ++;
    }
    return ans;
}


const lengthOfArray = length(arr)
console.log("Length of Array is: ", lengthOfArray);


// 3. Find the Largest Number

let arr1 = [3,5,7,8,9];

function largest(arr1){
    var ans =arr1[0];
    for(let i=0; i<arr1.length; i++){
        if(arr1[i+1] > arr1[i]){
            ans=arr1[i+1];
        }
    }
    return ans;
}
console.log("The largest element is: ", largest(arr1));

// 4. Check if Element Exists
// 7 array present or not

function findElement(arr1){
    for(let i=0; i<arr1.length; i++){
        if(arr[i] == 7) {
            // return true;
            console.log("Print Element is Present")
        }
    }
    // return false;
    console.log("Element is absent");
}


const result = findElement(arr1);



// Run time Prompt

const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
  rl.close();
});