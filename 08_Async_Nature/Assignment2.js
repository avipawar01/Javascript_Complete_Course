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


// 3.Write a function  that filters an array based on a callback function. 
// The callback should decide whether each element should be included in the returned array.

function filterArray (arr,callback2){
    let results = [];

    for (let i = 0;i<arr.length;i++){
        if(callback2(arr[i],i,arr)){
            results.push(arr[i]);
        }
    }
    return results;
}
let numbers1 = [1,2,3,4,5,6];

let evens = filterArray(numbers1,function(num){
    return num % 2 == 0;
});
console.log(evens);

// 4. Asynchronous Callback Simulation

// Write a function simulateAsyncTask that simulates an asynchronous operation (like fetching data).
//  Once the operation is complete, a callback function should be invoked with a message indicating completion.

function simulateAsyncTask (callback3){
    console.log("task started");


    setTimeout(()=> {
        console.log("tast completed!");
        callback3("operation is complete")
    },2000);
}

function callback3(message){
    console.log("callback3 message:",message)
}

simulateAsyncTask(callback3);

// 5. Nested Callbacks (Advanced)
//Write a function fetchData that simulates fetching data from a server.
//Once the data is fetched, pass it to a callback function that processes it further (e.g., transforming or logging each element).
//Demonstrate chaining of multiple callbacks.